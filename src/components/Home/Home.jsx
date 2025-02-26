import Menu from '../Header/Menu/Menu'
import Form from '../Form/Form'
import MobileMenu from '../Header/Menu/MobileMenu/MobileMenu'

export default function Home({searchValue, isHidden, setIsHidden}) {
	window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<div>
			<div style={{ opacity: isHidden ? 0.2 : 1 }}>
				<Menu isHidden={{ isHidden }} />
				<Form searchValue={searchValue} />
			</div>
			{isHidden && <MobileMenu isHidden={isHidden} setIsHidden={setIsHidden} />}
		</div>
	)
}