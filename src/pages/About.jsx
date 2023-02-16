import React from 'react'
import CountUp from 'react-countup'

import '../scss/pages/About.scss'

const About = () => {
	return (
		<section className='about'>
			<div className='about__wrapper'>
				<div className='about__figures figures'>
					<h1 className='figures__title'>BMW GROUP KEY FIGURES.</h1>
					<div className='figures__blocks'>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={118909} duration={1} />
							</p>
							<span className='figures__block-text'>EMPLOYEES(2021).</span>
						</div>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={4517} duration={1} />
							</p>
							<span className='figures__block-text'>APPRENTICES(2021).</span>
						</div>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={31} duration={1} />
							</p>
							<span className='figures__block-text'>
								PRODUCTION LOCATIONS IN 15 COUNTRIES(2021).
							</span>
						</div>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={2521514} duration={1} />
							</p>
							<span className='figures__block-text'>
								AUTOMOBILES DELIVERED TO CUSTOMERS(2021).
							</span>
						</div>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={194261} duration={1} />
							</p>
							<span className='figures__block-text'>
								MOTORCYCLES DELIVERED(2021).
							</span>
						</div>
						<div className='figures__block'>
							<p className='figures__block-value'>
								<CountUp end={111239000000} duration={1} />
							</p>
							<span className='figures__block-text'>EUROS REVENUE(2021).</span>
						</div>
					</div>
				</div>
				<div className='about__info info'>
					<h1 className='info__title'>WHO WE ARE.</h1>
					<div className='info__block'>
						<div className='info__block-item'>
							<img
								className='info__block-image'
								src='https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/company/einstiegsseite/Hydrogen_Fuel_Cell_Fahrzeug.jpg.grp-transform/xxlarge/Hydrogen_Fuel_Cell_Fahrzeug.jpg'
								alt='Hydrogen'
							/>
						</div>
						<div className='info__block-item'>
							<h3 className='info__block-title'>The BMW Group company profile.</h3>
							<p className='info__block-text'>
								The special fascination of the BMW Group not only lies in its
								products and technology, but also in the company’s history, written
								by inventors, pioneers and brilliant designers. Today, the BMW
								Group, with its 31 production and assembly facilities in 15
								countries as well as a global sales network, is the world’s leading
								manufacturer of premium automobiles and motorcycles, and provider of
								premium financial and mobility services.
							</p>
						</div>
					</div>
					<div className='info__block'>
						<div className='info__block-item'>
							<h3 className='info__block-title'>Production today and tomorrow.</h3>
							<p className='info__block-text'>
								The BMW Group sets trends in production technology and
								sustainability as an innovation leader with an intelligent material
								mix, a technological shift towards digitalisation and
								resource-efficient production. At the same time, flexibility and
								continuous optimisation of value chains ensure competitiveness.
							</p>
						</div>
						<div className='info__block-item'>
							<img
								className='info__block-image'
								src='https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/company/einstiegsseite/Innenraum_autonomes_Fahren.jpg.grp-transform/xxlarge/Innenraum_autonomes_Fahren.jpg'
								alt='Wheel'
							/>
						</div>
					</div>
					<div className='info__block'>
						<div className='info__block-item'>
							<img
								className='info__block-image'
								src='https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/company/einstiegsseite/Technologie_Efficient_Dynamics.jpg.grp-transform/xxlarge/Technologie_Efficient_Dynamics.jpg'
								alt='Suspension'
							/>
						</div>
						<div className='info__block-item'>
							<h3 className='info__block-title'>
								Sustainability: the guiding principle for all our actions.
							</h3>
							<p className='info__block-text'>
								Long-term thinking and responsible action are the basis of economic
								success. Ecological and social sustainability, comprehensive product
								responsibility and a clear commitment to conserving resources are
								therefore an integral part of our strategy. With Efficient Dynamics,
								the BMW Group consistently implements the principle of sustainable
								mobility and is steadily reducing its vehicles’ fuel consumption and
								emissions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export { About }
