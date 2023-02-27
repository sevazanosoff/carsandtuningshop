import React from 'react'
import './Pagination.scss'
const Pagination = ({ page, totalPages, changePage }) => {
	const totalPagesArray = []
	for (let i = 0; i < totalPages; i++) {
		totalPagesArray.push(i + 1)
	}
	return (
		<div className='page__wrapper'>
			{totalPagesArray.map(p => (
				<span
					key={p}
					onClick={() => changePage(p)}
					className={page === p ? 'page__current' : 'page'}>
					{p}
				</span>
			))}
		</div>
	)
}

export { Pagination }
