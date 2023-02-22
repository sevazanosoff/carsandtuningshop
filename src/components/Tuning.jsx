import React from 'react'
import { motion } from 'framer-motion'
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

	const titleVariants = {
		visible: custom => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: custom * 0.2,
			},
		}),
		hidden: {
			opacity: 0,
			x: 100,
		},
	}

	const listVariants = {
		visible: custom => ({
			opacity: 1,
			transition: {
				delay: custom * 0.01,
			},
		}),
		hidden: {
			opacity: 0,
		},
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			className='tuning'
			id='tuning'>
			<div className='tuning__wrapper'>
				<motion.h1 variants={titleVariants} custom={1} className='tuning__title'>
					Here the shop when you can upgrade you car!
				</motion.h1>
				<motion.ul
					initial='hidden'
					animate='visible'
					viewport={{ amount: 0.2, once: true }}
					className='tuning__list'>
					{items.map((item, index) => (
						<Link
							className='tuning__list-link'
							key={uuidv4()}
							to={`tuning/${item.code}`}
							state={{ item: item }}>
							<motion.li
								variants={listVariants}
								custom={index}
								className='tuning__list-item list__item'>
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
							</motion.li>
						</Link>
					))}
				</motion.ul>
			</div>
		</motion.section>
	)
}
export { Tuning }
