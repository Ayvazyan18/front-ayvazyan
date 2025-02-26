import Menu from '../Menu'
import style from './MobileMenu.module.css'
import Logo from '../../../../assets/images/Logo.png'
import Close from '../../../../assets/images/close.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({ isHidden, setIsHidden }) {
	const [isOpen, setIsOpen] = useState(true)
	
	const toggleMenu = () => {
		console.log(isOpen);
		setIsOpen(true)
		setIsHidden(false)
	}

	return (
		<div
			className={`${style.mobileMenu_content} ${isOpen && style.menu_position}`}
		>
			<div className={style.logo_content}>
				<Link to={'/'}>
					<img src={Logo} alt='Logo' />
				</Link>
				<button className={style.close_btn} onClick={() => toggleMenu()}>
					{console.log(isOpen)}
					<img src={Close} alt='Close_icon' />
				</button>
			</div>
			{isHidden && <Menu />}
		</div>
	)
}
