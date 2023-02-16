import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { Navbar } from './ui/Navbar/Navbar'
import { ReactComponent as Logo } from '../image/Header/Logo.svg'

import '../scss/components/Header.scss'

const Header = () => {
	const location = useLocation()
	const cartItems = useSelector(state => state.cart.cartItems)
	const isMounted = React.useRef(false)

	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(cartItems)
			localStorage.setItem('cart', json)
		}
		isMounted.current = true
	}, [cartItems])

	return (
		<>
			<header id='header' className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<Link className='header__logo' to='/'>
							<Logo />
							BMW
						</Link>
						{location.pathname === '/' && <Navbar />}
					</div>
				</div>
			</header>
		</>
	)
}

export { Header }
