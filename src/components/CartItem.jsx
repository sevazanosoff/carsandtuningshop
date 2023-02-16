import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, minusItem, removeItem } from '../redux/cart/cartSlice'

import '../scss/components/CartItem.scss'

const CartItem = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart.cartItems)

	const removeOneItem = obj => {
		if (window.confirm(`You want remove this item ?`)) {
			dispatch(removeItem(obj))
		}
	}

	return (
		<>
			{cartItems.map(obj => (
				<div key={uuidv4()} className='cart__block'>
					<div className='cart__block-info'>
						<img className='cart__block-image' src={obj.image} alt='itemicon' />
						<div>
							<h3 className='cart__block-title'>{obj.title}</h3>
							<p className='cart__block-code'>Product code: {obj.code}</p>
						</div>
						<span
							className='cart__block-remove'
							onClick={() => removeOneItem(obj)}></span>
					</div>
					<div className='cart__block-numbers'>
						<p className='cart__block-price'>
							{+obj.discount
								? obj.price - (obj.price * +obj.discount) / 100 + '$'
								: obj.price + '$'}
						</p>
						<p className='cart__block-count'>
							<span
								className='cart__block-plus'
								onClick={() => dispatch(addItem(obj))}>
								+
							</span>
							{obj.count}
							<span
								className='cart__block-minus'
								onClick={() => dispatch(minusItem(obj))}>
								-
							</span>
						</p>
					</div>
					<p className='cart__block-price'>
						{+obj.discount
							? (obj.price - (obj.price * +obj.discount) / 100) * obj.count
							: obj.price * obj.count}
						$
					</p>
				</div>
			))}
		</>
	)
}

export { CartItem }
