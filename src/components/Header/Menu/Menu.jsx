import { useEffect, useRef, useState } from 'react'
import style from './Menu.module.css'
import SubMenu from './SubMenu/SubMenu'

export default function Menu ({isHidden}) {
	const menuArray = [
		'Demos',
		'Post',
		'Features',
		'Categories',
		'Shop',
		'Buy Now',
	]

	const [arrow, setArrow] = useState(null)
	const [open, setOpen] = useState(true)
	const [isVisible, setIsVisible] = useState(true)

	const menuRef = useRef(null)
	const subMenuRef = useRef(null)

	const changeArrowRotate = index => {
		setArrow(arrow === index ? null : index)
		setOpen(true)
	}

	

	// handleScroll

	useEffect(() => {
		let lasScrollY = window.scrollY

		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > 200) {
				if (currentScrollY > lasScrollY) {
					setArrow(false)
					setIsVisible(false)
					setOpen(false)
				} else {
					setIsVisible(true)
				}
			} else {
				setIsVisible(true)
			}
			lasScrollY = currentScrollY
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.addEventListener('scroll', handleScroll)
		}
	}, [])



	// handleClickOutside

	useEffect(() => {
		const handleClickOutside = event => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				subMenuRef.current &&
				!subMenuRef.current.contains(event.target)
			) {
				setOpen(false)
				setArrow(null)
			}
		}
		
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return (
		<nav
			className={`${isHidden ? style.menu_content : ''} ${
				isVisible ? style.show : style.hide
			}`}
			ref={menuRef}
		>
			{menuArray.map((item, i) => {
				return (
					<div key={i}>
						<div
							id={i}
							className={style.menuItem_content}
							onClick={() => changeArrowRotate(i)}
						>
							<p className={style.menu_paragraph}>{item}</p>
							<span id={i} className={arrow === i ? style.arrow_down : ''}>
								{' '}
								&#62;
							</span>
						</div>
						{arrow === i && open ? (
							<div ref={subMenuRef}>
								<SubMenu />
							</div>
						) : null}
					</div>
				)
			})}
		</nav>
	)
}