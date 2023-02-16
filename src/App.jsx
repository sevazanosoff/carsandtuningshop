import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { CarFullPage } from './pages/CarFullPage'
import { TuningFullPage } from './pages/TuningFullPage'
import { SeriesFullPage } from './pages/SeriesFullPage'

import { Layout } from './Layout/Layout'

import { Loading } from './components/ui/Loading/Loading'

// Многие картинки добавлены через ссылки, я понимаю что это очень портит оптимизацию и загрузку страницы
// но по другому они либо не работали либо я не нашел решение как сделать что-бы работали :( )

const App = () => {
	return (
		<Routes>
			<Route
				path=''
				element={
					<Suspense fallback={<Loading />}>
						<Layout />
					</Suspense>
				}>
				<Route
					path='/'
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path='about'
					element={
						<Suspense fallback={<Loading />}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path='series/:series'
					element={
						<Suspense fallback={<Loading />}>
							<SeriesFullPage />
						</Suspense>
					}
				/>
				<Route
					path='tuning/:code'
					element={
						<Suspense fallback={<Loading />}>
							<TuningFullPage />
						</Suspense>
					}
				/>
				<Route
					path='cart'
					element={
						<Suspense fallback={<Loading />}>
							<Cart />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense fallback={<Loading />}>
							<NotFound />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path='series/:series/:title'
				element={
					<Suspense fallback={<Loading />}>
						<CarFullPage />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export { App }
