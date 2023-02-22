import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Form } from './Form'

const ModalForm = forwardRef(({ closeModal }, ref) => {
	return (
		<div ref={ref}>
			<Form closeModal={closeModal} />
		</div>
	)
})

export { ModalForm }

export const MModalForm = motion(ModalForm)
