import React from 'react'

import { useForm } from 'react-hook-form'

import './Form.scss'

const Form = ({ closeModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => alert(JSON.stringify(data))
	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<svg
				onClick={closeModal}
				className='form__svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 50 50'
				width='30px'
				height='30px'>
				<path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z' />
			</svg>
			<label className='form__text'>Your name</label>
			<input
				className='form__input'
				{...register('name', {
					required: 'Field is required!',
					minLength: {
						value: 4,
						message: 'Min. words count: 4',
					},
					maxLength: {
						value: 24,
						message: 'Max. words count: 24',
					},
				})}
			/>
			{errors?.name && <p className='form__error'>{errors?.name?.message || 'Error!'}</p>}
			<label className='form__text'>Your phone</label>
			<input
				className='form__input'
				{...register('phone', {
					required: 'Field is required!',
					pattern: /^((38|\+38)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
				})}
			/>
			{errors?.phone && (
				<p className='form__error'>{errors?.phone?.message || 'Write correct type!'}</p>
			)}
			<button className='form__btn' type='submit'>
				Call me back!
			</button>
		</form>
	)
}

export { Form }
