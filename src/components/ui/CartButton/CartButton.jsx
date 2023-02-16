import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './CartButton.scss'

const CartButton = () => {
	const cartItems = useSelector(state => state.cart.cartItems)

	return (
		<Link to='/cart' className='cartbutton'>
			<span className='cartbutton__icon'></span>
			<span className='cartbutton__count'>{cartItems.length}</span>
		</Link>
	)
}

export { CartButton }
