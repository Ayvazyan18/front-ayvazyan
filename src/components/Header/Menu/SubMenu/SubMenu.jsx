import style from './SubMenu.module.css'

export default function SubMenu () {
    return (
			<div className={style.subMenu_content}>
				<div className={style.SubMenuText_content}>
					<p>Post Header</p>
                    <span>&#62;</span>
				</div>
				<div className={style.SubMenuText_content}>
					<p>Post Layout</p>
                    <span>&#62;</span>
				</div>
				<div className={style.SubMenuText_content}>
					<p>Share Buttons</p>
                    <span>&#62;</span>
				</div>
				<div className={style.SubMenuText_content}>
					<p>Gallery Post</p>
                    <span>&#62;</span>
				</div>
				<div className={style.SubMenuText_content}>
					<p>Video Post</p>
                    <span>&#62;</span>
				</div>
			</div>
		)
}