import React from 'react'
import { motion } from 'framer-motion'
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

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.5, once: true }}
			className='series'
			id='series'>
			<motion.h1 variants={titleVariants} custom={1} className='series__title'>
				Find the car that's right for you!
			</motion.h1>
			<motion.h1 variants={titleVariants} custom={2} className='series__subtitle'>
				Freude am Fahren: With pleasure of driving!
			</motion.h1>
			<div className='series__items'>
				{items.map((item, index) => (
					<div key={uuidv4()} className='series__item'>
						<Link to={item.to} className='series__item-title'>
							{item.title}
						</Link>
					</div>
				))}
			</div>
		</motion.section>
	)
}

export { Series }
