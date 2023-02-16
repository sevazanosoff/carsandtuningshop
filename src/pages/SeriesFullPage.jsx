import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Link as LinkScroll } from 'react-scroll'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeriesItem } from '../redux/series/asyncActions'

import { SeriesItem } from '../components/SeriesItem'
import { SeriesDropdown } from '../components/SeriesDropdown'

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
						/>
					))}
				</div>

				{handler && (
					<SeriesDropdown
						setHandler={setHandler}
						setHandleItem={setHandleItem}
						handleItem={handleItem}
					/>
				)}
			</div>
		</section>
	)
}

export { SeriesFullPage }
