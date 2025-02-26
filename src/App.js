import Header from './components/Header/Header'
import { useState } from 'react'
import Menu from './components/Header/Menu/Menu'
import Form from './components/Form/Form'
import MobileMenu from './components/Header/Menu/MobileMenu/MobileMenu'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [isHidden, setIsHidden] = useState(false)

	return (
		<div>
			<Header
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setIsHidden={setIsHidden}
			/>
			<div>
				<div
					style={{ opacity: isHidden ? 0.2 : 1 }}
				>
					<Menu isHidden={{ isHidden }} />
					<Form searchValue={searchValue} isHidden={isHidden} />
				</div>
				{isHidden && (
					<MobileMenu isHidden={isHidden} setIsHidden={setIsHidden} />
				)}
			</div>
		</div>
	)
}

export default App
