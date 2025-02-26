import Header from './components/Header/Header'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [isHidden, setIsHidden] = useState(false)

	return (
		<div className='App'>
			<Header
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setIsHidden={setIsHidden}
			/>
			<Routes>
				<Route path='/' element={<Home isHidden={isHidden} setIsHidden={setIsHidden} searchValue={searchValue} />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
