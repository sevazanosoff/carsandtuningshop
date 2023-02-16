import React from 'react'

import { useInView } from 'react-intersection-observer'

import { Series } from '../components/Series'
import { Tuning } from '../components/Tuning'
import { UpButton } from '../components/ui/UpButton/UpButton'
import { CartButton } from '../components/ui/CartButton/CartButton'

import '../scss/pages/Home.scss'

const Home = () => {
	const { ref, inView } = useInView()

	return (
		<section className='home'>
			<div className='presentation'></div>
			<Series />
			<span ref={ref} className='home__main'>
				<Tuning />
			</span>
			{inView && (
				<>
					<UpButton to={'header'} />
					<CartButton />
				</>
			)}
		</section>
	)
}

export { Home }
