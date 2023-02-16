import React from 'react'

import '../scss/components/CartEmpty.scss'

const CartEmpty = () => {
	return (
		<div className='cart__empty'>
			<div className='cart__empty-wrapper'>
				<h1 className='cart__empty-title'>Your cart is empty &#128532;</h1>
				<h3 className='cart__empty-subtitle'>But it's not too late to fix it &#128517;</h3>
			</div>
		</div>
	)
}

export { CartEmpty }
