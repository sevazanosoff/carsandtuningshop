import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import './Layout.scss'

const Layout = () => {
	return (
		<div className='layout'>
			<div className='layout__wrapper'>
				<Header />
				<div className='layout__content'>
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export { Layout }
