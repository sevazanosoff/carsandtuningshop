import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
			<AnimatePresence>
				{inView && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: 0.01 }}
						exit={{ opacity: 0 }}>
						<UpButton to={'header'} />
						<CartButton />
					</motion.span>
				)}
			</AnimatePresence>
		</section>
	)
}

export { Home }
