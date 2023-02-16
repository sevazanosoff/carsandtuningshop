import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../redux/cart/cartSlice'

import { CartEmpty } from '../components/CartEmpty'
import { CartItem } from '../components/CartItem'
import { ModalForm } from '../components/ui/ModalForm/ModalForm'

import '../scss/pages/Cart.scss'

const Cart = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart.cartItems)
	const totalPrice = useSelector(state => state.cart.totalPrice)

	const [open, isOpen] = React.useState(false)

	const openModal = e => {
		e.preventDefault()
		isOpen(true)
	}

	const closeModal = () => {
		isOpen(false)
	}

	const clearAllItems = () => {
		if (window.confirm(`You want clear all items ?`)) {
			dispatch(clearItems())
		}
	}

	return (
		<section className='cart'>
			<div className='cart__wrapper'>
				<h1 className='cart__title'>Cart</h1>
				{cartItems.length > 0 ? (
					<>
						<div className='cart__blocks'>
							<div className='cart__block'>
								<p className='cart__block-item'>
									{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
								</p>
								<div className='cart__block-items'>
									<p className='cart__block-item'>Price per unit</p>
									<p className='cart__block-item'>Quantity</p>
								</div>
								<p className='cart__block-item'>All</p>
							</div>
							<CartItem />
						</div>
						<div className='cart__total'>
							<button className='cart__total-btn' onClick={clearAllItems}>
								Clear all items
							</button>
							<p className='cart__total-item'>Total price: {totalPrice}$</p>
							<div className='cart__total-btns'>
								<button className='cart__total-btn' onClick={e => openModal(e)}>
									To order
								</button>
								<Link to={-2} className='cart__total-btn'>
									Continue shopping
								</Link>
							</div>
							{open && (
								<div
									onClick={closeModal}
									className={open ? 'cart__overlay-show' : 'cart__overlay'}>
									<div
										onClick={e => e.stopPropagation()}
										className={open ? 'cart__modal-show' : 'cart__modal'}>
										<ModalForm closeModal={closeModal} />
									</div>
								</div>
							)}
						</div>
					</>
				) : (
					<CartEmpty />
				)}
			</div>
		</section>
	)
}

export { Cart }
