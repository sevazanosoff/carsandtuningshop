import React from 'react'
import { motion } from 'framer-motion'

import { v4 as uuidv4 } from 'uuid'
import { Link as LinkScroll } from 'react-scroll'
import { useLocation, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCar } from '../redux/car/asyncActions'

import { CarItem } from '../components/CarItem'
import { CarMItem } from '../components/CarMItem'
import { Loading } from '../components/ui/Loading/Loading'

import { carTitle } from '../utils/carTitle'

import '../scss/pages/CarFullPage.scss'

const CarFullPage = () => {
	const [tuned, setTuned] = React.useState(false)

	const dispatch = useDispatch()
	const { state } = useLocation()

	const car = useSelector(state => state.car.item)
	const status = useSelector(state => state.car.status)

	const aboutVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			y: -500,
		},
		exit: {
			opacity: 0,
		},
	}

	const headerVariants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			x: -100,
		},
		exit: {
			opacity: 0,
		},
	}

	const navigateVariants = {
		visible: custom => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: custom * 0.3,
			},
		}),
		hidden: {
			x: -100,
			opacity: 0,
		},
	}

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
				<motion.header
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='car__header'>
					<motion.h1 variants={headerVariants} className='car__header-title'>
						{state.data.title}
					</motion.h1>
					{tuned && (
						<motion.img
							variants={headerVariants}
							className='car__header-logo'
							src='https://seeklogo.com/images/B/bmw-m-performance-logo-949F1C0E03-seeklogo.com.png'
							alt='mperfomancelogo'
						/>
					)}
					<img className='car__header-image' src={car?.background} alt='backgroundcar' />
					<Link to={-1} className='car__header-btn'></Link>
				</motion.header>
				<main className='car__main main'>
					<div className='main__wrapper'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='main__about'>
							<div className='main__about-blocks'>
								<div className='main__about-block'>
									<motion.h3
										variants={aboutVariants}
										className='main__about-title'>
										{tuned ? 'Power' : 'Fuel consumption (in the mixed cycle)'}
									</motion.h3>
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
						</motion.div>
						<div className='main__navigate navigate'>
							<h1 className='navigate__title'>{carTitle('', state.data)}</h1>
							<nav className='navigate__navbar'>
								<motion.ul
									initial='hidden'
									whileInView='visible'
									viewport={{ amount: 0.3, once: true }}
									className='navigate__navbar-list'>
									<LinkScroll
										to='features'
										className='navigate__navbar-item'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<motion.li
											custom={1}
											variants={navigateVariants}
											className='navigate__navbar-item'>
											Features of technologies
										</motion.li>
									</LinkScroll>
									<LinkScroll
										to='design'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<motion.li
											custom={2}
											variants={navigateVariants}
											className='navigate__navbar-item'>
											Design
										</motion.li>
									</LinkScroll>
									<LinkScroll
										custom={3}
										variants={navigateVariants}
										to='specification'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}>
										<motion.li
											custom={3}
											variants={navigateVariants}
											className='navigate__navbar-item'>
											Specifications
										</motion.li>
									</LinkScroll>
								</motion.ul>
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
								className='car__footer-image'
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
