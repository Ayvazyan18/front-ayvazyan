import { useState } from 'react'
import Logo from '../../assets/images/Logo.png'
import SearchLogo from '../../assets/images/Search.png'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header({ setSearchValue, isHidden, setIsHidden }) {
	const [search, setSearch] = useState(false)

	const inputViewHandler = () => {
		setSearch(!search)
	}

	return (
		<header>
			<div className={style.container}>
				<button
					onClick={() => setIsHidden(!isHidden)}
					className={style.mobileMenu_content}
				>
					<div className={style.mobileMenu_icon}></div>
					<div className={style.mobileMenu_icon}></div>
					<div className={style.mobileMenu_icon}></div>
				</button>
				<div className={style.logo_content}>
					<Link to={'/'} className={style.logo_href}>
						<img src={Logo} alt='Logotype' />
					</Link>
				</div>
				<div
					style={{ zIndex: 1 }}
					className={`${style.search_content} ${search && style.search_back}`}
				>
					<img
						src={SearchLogo}
						alt='Search_logo'
						onClick={inputViewHandler}
						className={style.search_img}
					/>
					<input
						type='text'
						placeholder='Writhe here ...'
						className={`${style.search_input} ${search ? style.active : ''}`}
						onChange={e => setSearchValue(e.target.value)}
					/>
				</div>
			</div>
		</header>
	)
}
