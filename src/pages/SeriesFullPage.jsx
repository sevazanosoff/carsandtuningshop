import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeriesItem } from '../redux/series/asyncActions'

import { SeriesItem } from '../components/SeriesItem'
import { MSeriesDropdown } from '../components/SeriesDropdown'
import { Loading } from '../components/ui/Loading/Loading'

import '../scss/pages/SeriesFullPage.scss'

const SeriesFullPage = () => {
	const [handler, setHandler] = React.useState(false)
	const [handleItem, setHandleItem] = React.useState({})
	const params = useParams()
	const dispatch = useDispatch()
	const item = useSelector(state => state.series.item)
	const status = useSelector(state => state.series.status)

	React.useEffect(() => {
		dispatch(fetchSeriesItem(params.series))
	}, [])

	if (status === 'loading') {
		return <Loading />
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
		<section className='series__page'>
			<div className='series__page-wrapper'>
				<div className='series__page-blocks'>
					{item.map(car => (
						<SeriesItem
							key={uuidv4()}
							car={car}
							handleItem={handleItem}
							setHandler={setHandler}
							setHandleItem={setHandleItem}
							handler={handler}
						/>
					))}
				</div>
				<AnimatePresence>
					{handler && (
						<MSeriesDropdown
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={dropdownVariants}
							setHandler={setHandler}
							setHandleItem={setHandleItem}
							handleItem={handleItem}
						/>
					)}
				</AnimatePresence>
			</div>
		</section>
	)
}

export { SeriesFullPage }
