import React from 'react'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { carTitle } from '../utils/carTitle'
import Slider from 'react-slick'

import '../scss/components/CarItem.scss'

const CarItem = ({ data, car }) => {
	// Slider settings:
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		padSlides: true,
	}
	const settingsBlocks = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		padSlides: true,
		responsive: [
			{
				breakpoint: 697,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	const blocksVariants = {
		visible: custom => ({
			opacity: 1,
			transition: {
				delay: custom * 0.2,
			},
		}),
		hidden: {
			opacity: 0,
		},
	}
	const characteristicsVariants = {
		visible: custom => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.2,
			},
		}),
		hidden: {
			y: -200,
			opacity: 0,
		},
	}

	let handleRef = React.useRef(false)

	React.useEffect(() => {
		if (!handleRef.current) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
		handleRef.current = true
	}, [])

	return (
		<>
			<div id='features' className='main__features features'>
				<h1 className='features__title'>{carTitle('DIGITAL TECHNOLOGIES OF THE', data)}</h1>
				<div className='features__text car__text'>
					Numerous innovative systems of the new BMW 3 Series Sedan provide the driver
					with easy communication with his car.
				</div>
				<ul className='features__list car__list'>
					<li className='features__list-item car__list-item'>
						The BMW Curved Display displays all important information and features
						convenient touch control
					</li>
					<li className='features__list-item'>
						Unlimited network capabilities thanks to smartphone integration allow you to
						conveniently plan routes on your smartphone and send them to the car
					</li>
					<li className='features__list-item'>
						Discover intuitive control with voice commands
					</li>
				</ul>
				{window.screen.width < 780 ? (
					<Slider {...settings}>
						<div className='features__block'>
							<img
								className='features__block-image'
								src='https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1662547649260.jpg'
								alt='feauturesimage'
							/>
							<h3 className='features__block-title'>BMW Curved Display.</h3>
							<p className='features__block-text'>
								Almost all functions of the car can be controlled using the large
								curved BMW Curved Display. The driver-facing touch display with
								intuitive widgets makes driving even more convenient.
							</p>
						</div>
						<div className='features__block'>
							<img
								className='features__block-image'
								src='https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser_1058352003/image.transform/smallteaser/image.1662547649313.jpg'
								alt='feauturesimage'
							/>
							<h3 className='features__block-title'>BMW projection display.</h3>
							<p className='features__block-text'>
								BMW's full-color head-up display displays all information about the
								trip directly in the driver's field of vision.
							</p>
						</div>
					</Slider>
				) : (
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='features__blocks'>
						<motion.div
							custom={1}
							variants={blocksVariants}
							className='features__block'>
							<img
								className='features__block-image'
								src='https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1662547649260.jpg'
								alt='feauturesimage'
							/>
							<h3 className='features__block-title'>BMW Curved Display.</h3>
							<p className='features__block-text'>
								Almost all functions of the car can be controlled using the large
								curved BMW Curved Display. The driver-facing touch display with
								intuitive widgets makes driving even more convenient.
							</p>
						</motion.div>
						<motion.div
							custom={2}
							variants={blocksVariants}
							className='features__block'>
							<img
								className='features__block-image'
								src='https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2022/bmw-3-series-sedan-highlights/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser_1058352003/image.transform/smallteaser/image.1662547649313.jpg'
								alt='feauturesimage'
							/>
							<h3 className='features__block-title'>BMW projection display.</h3>
							<p className='features__block-text'>
								BMW's full-color head-up display displays all information about the
								trip directly in the driver's field of vision.
							</p>
						</motion.div>
					</motion.div>
				)}
			</div>
			<div id='design' className='main__design design'>
				<h1 className='design__title'>
					{carTitle('FEATURES OF THE EXTERIOR DESIGN OF', data)}
				</h1>
				{window.screen.width < 997 ? (
					<Slider {...settingsBlocks}>
						{!!car.carDesign &&
							car.carDesign.map(item => (
								<div key={uuidv4()} className='design__block car__block'>
									<img
										className='design__block-image car__block-image'
										src={item.photo}
										alt=''
									/>
									<h3 className='design__block-title car__block-title'>
										{item.title}
									</h3>
									<p className='design__block-text car__block-text'>
										{item.text}
									</p>
								</div>
							))}
					</Slider>
				) : (
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='design__blocks car__blocks'>
						{!!car.carDesign &&
							car.carDesign.map((item, index) => (
								<motion.div
									variants={blocksVariants}
									custom={index}
									key={uuidv4()}
									className='design__block car__block'>
									<img className='design__block-image' src={item.photo} alt='' />
									<h3 className='design__block-title'>{item.title}</h3>
									<p className='design__block-text'>{item.text}</p>
								</motion.div>
							))}
					</motion.div>
				)}
				<h3 className='design__subtitle'>{carTitle('INTERIOR DESIGN', data)}</h3>
				{window.screen.width < 997 ? (
					<Slider {...settingsBlocks}>
						{!!car.interiorDesign &&
							car.interiorDesign.map(item => (
								<div key={uuidv4()} className='design__block car__block'>
									<img
										className='design__block-image car__block-image'
										src={item.photo}
										alt=''
									/>
									<h3 className='design__block-title car__block-title'>
										{item.title}
									</h3>
									<p className='design__block-text car__block-text'>
										{item.text}
									</p>
								</div>
							))}
					</Slider>
				) : (
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='design__blocks car__blocks'>
						{!!car.interiorDesign &&
							car.interiorDesign.map((item, index) => (
								<motion.ddiv
									variants={blocksVariants}
									custom={index}
									key={uuidv4()}
									className='design__block car__block'>
									<img className='design__block-image' src={item.photo} alt='' />
									<h3 className='design__block-title'>{item.title}</h3>
									<p className='design__block-text'>{item.text}</p>
								</motion.ddiv>
							))}
					</motion.div>
				)}
			</div>
			<div className='main__dynamic dynamic'>
				<h1 className='dynamic__title'>
					{carTitle('FEATURES OF DRIVING DYNAMICS IN THE', data)}
				</h1>
				<p className='dynamic__text car__text'>{car.textDynamic}</p>
				<ul className='dynamic__list car__list'>
					{!!car.textDynamicList &&
						car.textDynamicList.map(item => (
							<li key={uuidv4()} className='dynamic__list-item car__list-item'>
								{item}
							</li>
						))}
				</ul>
				{window.screen.width < 997 ? (
					<Slider {...settingsBlocks}>
						{!!car.dynamic &&
							car.dynamic.map(item => (
								<div key={uuidv4()} className='dynamic__block car__block'>
									<img
										className='design__block-image car__block-image'
										src={item.photo}
										alt=''
									/>
									<h3 className='design__block-title car__block-title'>
										{item.title}
									</h3>
									<p className='design__block-text car__block-text'>
										{item.text}
									</p>
								</div>
							))}
					</Slider>
				) : (
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='dynamic__blocks car__blocks'>
						{!!car.dynamic &&
							car.dynamic.map((item, index) => (
								<motion.div
									variants={blocksVariants}
									custom={index}
									key={uuidv4()}
									className='dynamic__block car__block'>
									<img className='design__block-image' src={item.photo} alt='' />
									<h3 className='design__block-title'>{item.title}</h3>
									<p className='design__block-text'>{item.text}</p>
								</motion.div>
							))}
					</motion.div>
				)}
			</div>
			<div id='specification' className='main__specification specification'>
				<h1 className='specification__title'>
					{carTitle('TECHNICAL CHARACTERISTICS OF THE', data)}
				</h1>
				<p className='specification__text'>
					BMW 330e and other engines for the BMW 3 Series
				</p>
				<div className='specification__blocks'>
					<div className='specification__block'>
						<img
							className='specification__block-image'
							src={!!car.specifications && car.specifications[0]}
							alt='specificationphoto'
						/>
					</div>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='specification__block'>
						{!!car.specifications &&
							car.specifications.slice(1).map((item, index) => (
								<motion.div
									variants={characteristicsVariants}
									custom={index}
									key={uuidv4()}
									className='specification__block-item'>
									<h3 className='specification__block-title'>{item.title}</h3>
									<p className='specification__block-text'>{item.text}</p>
								</motion.div>
							))}
					</motion.div>
				</div>
			</div>
			<div className='main__accesorie accesorie'>
				<h1 className='accesorie__title'>
					{carTitle('ORIGINAL BMW ACCESSORIES FOR THE', data)}
				</h1>
				<p className='accesorie__text car__text'>
					Original BMW accessories allow you to adapt your car to yours individual wishes:
					all products are perfectly suited to your new one BMW 3 Series in terms of
					quality, design and performance.
				</p>
				{window.screen.width < 997 ? (
					<Slider {...settingsBlocks}>
						{!!car.accessories &&
							car.accessories.map(item => (
								<div key={uuidv4()} className='accesorie__block car__block'>
									<img
										className='accesorie__block-image car__block-image'
										src={item.photo}
										alt=''
									/>
									<h3 className='accesorie__block-title car__block-title'>
										{item.title}
									</h3>
									<p className='accesorie__block-text car__block-text'>
										{item.text}
									</p>
								</div>
							))}
					</Slider>
				) : (
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='accesorie__blocks car__blocks'>
						{!!car.accessories &&
							car.accessories.map((item, index) => (
								<motion.div
									variants={blocksVariants}
									custom={index}
									key={uuidv4()}
									className='accesorie__block car__block'>
									<img
										className='accesorie__block-image car__block-image'
										src={item.photo}
										alt=''
									/>
									<h3 className='accesorie__block-title car__block-title'>
										{item.title}
									</h3>
									<p className='accesorie__block-text car__block-text'>
										{item.text}
									</p>
								</motion.div>
							))}
					</motion.div>
				)}
			</div>
		</>
	)
}

export { CarItem }
