import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link as LinkScroll } from 'react-scroll'
import { useLocation, Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCar } from '../redux/car/asyncActions'

import { CarItem } from '../components/CarItem'
import { CarMItem } from '../components/CarMItem'
import { UpButton } from '../components/ui/UpButton/UpButton'
import { Loading } from '../components/ui/Loading/Loading'

import { carTitle } from '../utils/carTitle'

import '../scss/pages/CarFullPage.scss'

const CarFullPage = () => {
	const [tuned, setTuned] = React.useState(false)
	const { ref, inView } = useInView()

	const dispatch = useDispatch()
	const { state } = useLocation()

	const car = useSelector(state => state.car.item)
	const status = useSelector(state => state.car.status)

	React.useEffect(() => {
		dispatch(fetchCar(state.data.title.split(' ').splice(1).join('')))
		if (state.data.tuning === 'M') {
			setTuned(true)
		}
	}, [])

	if (status === 'loading') {
		return <Loading />
	}

	if (status === 'success') {
		return (
			<section id='car' className='car'>
				<header ref={ref} className='car__header'>
					<h1 className='car__header-title'>{state.data.title}</h1>
					{tuned && (
						<img
							className='car__header-logo'
							src='https://seeklogo.com/images/B/bmw-m-performance-logo-949F1C0E03-seeklogo.com.png'
							alt='mperfomancelogo'
						/>
					)}
					<img className='car__header-image' src={car?.background} alt='backgroundcar' />
					<Link to={-1} className='car__header-btn'></Link>
				</header>
				<main className='car__main main'>
					<div className='main__wrapper'>
						<div className='main__about'>
							<div className='main__about-blocks'>
								<div className='main__about-block'>
									<h3 className='main__about-title'>
										{tuned ? 'Power' : 'Fuel consumption (in the mixed cycle)'}
									</h3>
									<p className='main__about-text'>
										{tuned ? car.horsepower : car.consumption}
									</p>
								</div>
								<div className='main__about-block'>
									<h3 className='main__about-title'>Engine and fuel type</h3>
									<ul className='main__about-list'>
										{state.data.fuelType.map(item => (
											<li key={uuidv4()} className='main__about-text'>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='main__navigate navigate'>
							<h1 className='navigate__title'>{carTitle('', state.data)}</h1>
							<nav className='navigate__navbar'>
								<ul className='navigate__navbar-list'>
									<LinkScroll
										to='features'
										className='navigate__navbar-item'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<li className='navigate__navbar-item'>
											Features of technologies
										</li>
									</LinkScroll>
									<LinkScroll
										to='design'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<li className='navigate__navbar-item'>Design</li>
									</LinkScroll>
									<LinkScroll
										to='specification'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<li className='navigate__navbar-item'>Specifications</li>
									</LinkScroll>
								</ul>
							</nav>
						</div>
						<div className='main__infocar infocar'>
							<div className='infocar__wrapper'>
								<div className='infocar__text car__text'>{car.text}</div>
								<ul className='infocar__list car__list'>
									{!!car.textList &&
										car?.textList.map(item => (
											<li
												key={uuidv4()}
												className='infocar__list-item car__list-item'>
												{item}
											</li>
										))}
								</ul>
							</div>
						</div>
						{tuned ? (
							<CarMItem data={state.data} car={car} />
						) : (
							<CarItem data={state.data} car={car} />
						)}
						{!inView && (
							<>
								<UpButton to={'car'} />
							</>
						)}
					</div>
				</main>
				<footer className='car__footer'>
					<h1 className='car__footer-title'>
						{carTitle('PRICES AND SERVICES FOR THE', state.data)}
					</h1>
					<h3 className='car__footer-subtitle'>BMW SERVICES.</h3>
					<div className='car__footer-blocks'>
						<div className='car__footer-block'>
							<img
								src='https://www.bmw.ua/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-ms-bmw-services.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1650668963539.jpg'
								alt='footerphoto'
							/>
						</div>
						<div className='car__footer-block'>
							<ul className='car__footer-list'>
								BMW services will make your trips absolutely carefree:
								<li className='car__footer-item'>
									Thanks to BMW Service Inclusive, you will enjoy it to the
									fullest transparency thanks to services such as vehicle
									inspection, microfilter or brake fluid at a fixed cost.
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</section>
		)
	}
}

export { CarFullPage }
