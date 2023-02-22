import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

	const modalVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				ease: 'easeOut',
				duration: 0.15,
			},
		},
		hidden: {
			opacity: 0,
			scale: 0.75,
		},
		exit: {
			opacity: 0,
			scale: 0.75,
			transition: {
				ease: 'easeIn',
				duration: 0.15,
			},
		},
	}

	return (
		<section className={open ? 'cart-overflow' : 'cart'}>
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
						</div>
					</>
				) : (
					<CartEmpty />
				)}
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal}
						className={open ? 'cart__overlay-show' : 'cart__overlay'}>
						<motion.div
							initial='hidden'
							whileInView='visible'
							exit='exit'
							variants={modalVariants}
							onClick={e => e.stopPropagation()}
							className={open ? 'cart__modal-show' : 'cart__modal'}>
							<ModalForm closeModal={closeModal} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export { Cart }
