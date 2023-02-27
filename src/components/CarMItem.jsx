import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { v4 as uuidv4 } from 'uuid'

import Slider from 'react-slick'

import { carTitle } from '../utils/carTitle'

import '../scss/components/CarMItem.scss'

const CarMItem = ({ data, car }) => {
	const [handleFeatures, setHandleFeatures] = React.useState(true)
	const [handleTech, setHandleTech] = React.useState(true)
	// Slider settings:
	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		padSlides: true,
		responsive: [
			{
				breakpoint: 997,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 697,
				settings: {
					slidesToShow: 1,
				},
			},
		],
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
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
				},
			},
		],
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
	const characteristicsLeftVariant = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.2,
			},
		},
		hidden: {
			x: -200,
			opacity: 0,
		},
	}
	const characteristicsRightVariant = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.4,
			},
		},
		hidden: {
			x: 200,
			opacity: 0,
		},
	}

	const specImageVariants = {
		visible: {
			opacity: 1,
			transition: {
				delay: 0.2,
			},
		},
		hidden: {
			opacity: 0,
		},
	}
	const specBlocksVariants = {
		visible: custom => ({
			opacity: 1,
			transition: {
				delay: custom * 0.2,
			},
		}),
		hidden: {
			opacity: 0,
		},
		exit: {
			opacity: 0,
		},
	}
	// React.useEffect(() => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	})
	// }, [])

	return (
		<>
			<div className='main__characteristics characteristics'>
				<h1 className='characteristics__title'>
					{carTitle('CHARACTERISTICS OF THE ', data)}
				</h1>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5, once: true }}
					className='characteristics__wrapper'>
					<motion.div
						variants={characteristicsLeftVariant}
						className='characteristics__block'>
						<h1 className='characteristics__block-title'>{carTitle('', data)}</h1>
						<p className='characteristics__block-text'>{car.about.text}</p>
						<ul className='characteristics__block-list'>
							{car.about.list.map(item => (
								<li key={uuidv4()} className='characteristics__list-item'>
									{item}
								</li>
							))}
						</ul>
					</motion.div>
					<motion.img
						variants={characteristicsRightVariant}
						className='characteristics__image'
						src={car.about.background}
						alt='bmw'
					/>
				</motion.div>
			</div>
			<div id='features' className='main__features spec'>
				<h1 className='spec__title'>{carTitle('DIGITAL TECHNOLOGIES OF THE', data)}</h1>
				<div className='spec__about'>
					<div className='spec__about-subtitle'>
						{carTitle('Dynamic characteristics and design elements', data)}
					</div>
					<p className='spec__about-text'>
						The BMW M3 Sedan is a sports sedan with outstanding driving characteristics.
						The powerful BMW M TwinPower Turbo power unit with a capacity of 480 hp,
						rear-wheel drive and motorsport technologies such as the special M
						suspension with active differential are responsible for its characteristics.
						The manual 6-speed M gearbox with short, precise gear changes contributes to
						a pleasant interaction between the driver and the car. The sporty four-door
						design and expressive M design elements create an unrivaled attitude that
						unmistakably indicates the sporty potential of the BMW M3 sedan.
					</p>
				</div>
				<div className='spec__wrapper'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className='spec__background'>
						<motion.img
							variants={specImageVariants}
							className='spec__background-image'
							src={car.features.background}
							alt='background'
						/>
						<ul id='design' className='spec__background-list'>
							<li
								onClick={() => setHandleFeatures(true)}
								className={
									handleFeatures
										? 'spec__background-item spec__background-active'
										: 'spec__background-item'
								}>
								Dynamic
							</li>
							<li
								onClick={() => setHandleFeatures(false)}
								className={
									!handleFeatures
										? 'spec__background-item spec__background-active'
										: 'spec__background-item'
								}>
								Design
							</li>
						</ul>
					</motion.div>
					{window.screen.width < 1200 ? (
						<Slider {...settingsBlocks}>
							{handleFeatures &&
								car.features.dynamic.map(item => (
									<div key={uuidv4()} className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodynamic'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</div>
								))}
							{!handleFeatures &&
								car.features.design.map(item => (
									<div key={uuidv4()} className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodesign'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</div>
								))}
						</Slider>
					) : (
						<motion.div
							initial='hidden'
							animate='visible'
							exit='exit'
							className={
								handleFeatures
									? 'spec__blocks '
									: 'spec__blocks spec__blocks-second'
							}>
							{handleFeatures &&
								car.features.dynamic.map((item, index) => (
									<motion.div
										custom={index}
										variants={specBlocksVariants}
										key={uuidv4()}
										className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodynamic'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</motion.div>
								))}
							{handleFeatures ? (
								<span
									src='../image/CarFullPage/icons8-next-30.png'
									onClick={() => setHandleFeatures(false)}
									className='spec__button-next next__btn'
									alt='next-button'
								/>
							) : (
								<span
									src='../image/CarFullPage/icons8-more-than-30.png'
									onClick={() => setHandleFeatures(true)}
									className='spec__button-prev prev__btn'
									alt='prev-button'
								/>
							)}
							{!handleFeatures &&
								car.features.design.map((item, index) => (
									<motion.div
										custom={car.features.design.length - index}
										variants={specBlocksVariants}
										key={uuidv4()}
										className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodesign'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</motion.div>
								))}
						</motion.div>
					)}
				</div>
			</div>
			<div className='main__impression spec'>
				<h1 className='impression__title'>{`${carTitle('', data)} - IMPRESSION.`}</h1>
				<h3 className='impression__subtitle'>
					{carTitle('Exterior and interior design features of the', data)}
				</h3>
				<Slider {...settings}>
					{car.impression.map(item => (
						<img
							className='impression__image'
							key={uuidv4()}
							src={item}
							alt='impressionphoto'
						/>
					))}
				</Slider>
			</div>
			<div className='main__technologies spec'>
				<h1 className='spec__title'>{carTitle('DIGITAL TECHNOLOGIES OF THE', data)}</h1>
				<div className='spec__about'>
					<div className='spec__about-subtitle'>
						{carTitle('Dynamic characteristics and design elements', data)}
					</div>
					<p className='spec__about-text'>
						M dashboard and operating concept, digital services and driver assistance
						systems in the .
					</p>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
					className='spec__wrapper'>
					<div className='spec__background'>
						<motion.img
							variants={specImageVariants}
							className='spec__background-image'
							src={car.technologies.background}
							alt='background'
						/>
						<ul className='spec__background-list'>
							<li
								onClick={() => setHandleTech(true)}
								className={
									handleTech
										? 'spec__background-item spec__background-active'
										: 'spec__background-item'
								}>
								Panel and concept
							</li>
							<li
								onClick={() => setHandleTech(false)}
								className={
									!handleTech
										? 'spec__background-item spec__background-active'
										: 'spec__background-item'
								}>
								Assistance
							</li>
						</ul>
					</div>
					{window.screen.width < 1200 ? (
						<Slider {...settingsBlocks}>
							{handleTech &&
								car.technologies.panel.map(item => (
									<div key={uuidv4()} className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodynamic'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</div>
								))}
							{!handleTech &&
								car.technologies.helpSystem.map(item => (
									<div key={uuidv4()} className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodesign'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</div>
								))}
						</Slider>
					) : (
						<motion.div
							initial='hidden'
							animate='visible'
							exit='exit'
							className={
								handleTech ? 'spec__blocks ' : 'spec__blocks spec__blocks-second'
							}>
							{handleTech &&
								car.technologies.panel.map((item, index) => (
									<motion.div
										custom={index}
										variants={specBlocksVariants}
										key={uuidv4()}
										className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodynamic'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</motion.div>
								))}
							{handleTech ? (
								<span
									src='../image/CarFullPage/icons8-next-30.png'
									onClick={() => setHandleTech(false)}
									className='spec__button-next next__btn'
									alt='next-button'
								/>
							) : (
								<span
									src='../image/CarFullPage/icons8-more-than-30.png'
									onClick={() => setHandleTech(true)}
									className='spec__button-prev prev__btn'
									alt='prev-button'
								/>
							)}
							{!handleTech &&
								car.technologies.helpSystem.map((item, index) => (
									<motion.div
										custom={car.technologies.helpSystem.length - index}
										variants={specBlocksVariants}
										key={uuidv4()}
										className='spec__block'>
										<img
											className='spec__block-image'
											src={item.photo}
											alt='photodesign'
										/>
										<h3 className='spec__block-title'>{item.title}</h3>
										<p className='spec__block-text'>{item.text}</p>
									</motion.div>
								))}
						</motion.div>
					)}
				</motion.div>
			</div>
			<div id='specification' className='main__specification specification'>
				<h1 className='specification__title'>
					{carTitle('TECHNICAL CHARACTERISTICS OF THE', data)}
				</h1>
				<p className='specification__text'>BMW M3 Competition Sedan and other models.</p>
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
			<div className='main__tuning tuning'>
				<h1 className='tuning__title-tuning'>
					{carTitle('ENGINES AND TECHNICAL CHARACTERISTICS', data)}
				</h1>
				<div className='tuning__about'>
					<div className='tuning__about-subtitle'>
						{carTitle('Dynamic characteristics and design elements', data)}
					</div>
					<p className='tuning__about-text'>
						M dashboard and operating concept, digital services and driver assistance
						systems in the .
					</p>
				</div>
				<div className='tuning__wrapper-background'>
					<div className='tuning__background'>
						<img
							className='tuning__background-image'
							src={car.tuning.background}
							alt='background'
						/>
					</div>
					{window.screen.width < 1200 ? (
						<Slider {...settingsBlocks}>
							{car.tuning.items.map(item => (
								<div key={uuidv4()} className='tuning__block'>
									<img
										className='tuning__block-image'
										src={item.photo}
										alt='photodynamic'
									/>
									<h3 className='tuning__block-title'>{item.title}</h3>
									<p className='tuning__block-text'>{item.text}</p>
								</div>
							))}
						</Slider>
					) : (
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.2, once: true }}
							className='tuning__blocks'>
							{car.tuning.items.map((item, index) => (
								<motion.div key={uuidv4()} className='tuning__block'>
									<img
										className='tuning__block-image'
										src={item.photo}
										alt='photodynamic'
									/>
									<h3 className='tuning__block-title'>{item.title}</h3>
									<p className='tuning__block-text'>{item.text}</p>
								</motion.div>
							))}
						</motion.div>
					)}
				</div>
			</div>
		</>
	)
}

export { CarMItem }
