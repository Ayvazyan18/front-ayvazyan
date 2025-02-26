import { Link, useLocation } from 'react-router-dom'
import style from '../ItemsForm/ItemsForm.module.css'
import BackIcon from '../../../assets/images/arrow.png'
import itemStyle from './ItemDetails.module.css'

export default function ItemForm() {
	const location = useLocation()
	const item = location.state

	console.log(item)

	if (!item) {
		return <p>Loading item data...</p>
	}

	window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<div className={itemStyle.item_content}>
			<Link to={'/'} className={itemStyle.backIcon_content}>
				<img className={itemStyle.back_icon} src={BackIcon} alt='Back_icon' />
				<p>BACK</p>
			</Link>
			<div className={style.itemForm_content}>
				<picture className={style.itemImg_content}>
					<source srcSet={item.item.srcSet} media='(max-width: 360px)' />
					<img src={item.item.img} alt='Item_img' className={style.img} />
				</picture>
				<div className={style.itemInfo_content}>
					<div className={style.tags_content}>{item.item.tags}</div>
					<div className={style.title_content}>{item.item.title}</div>
					<div className={style.postMeta_content}>
						<p className={style.autor_paragraph}>{item.item.autor}</p>
						<span className={style.firstDate_span}>{item.item.date}</span>
						<span className={style.secondDate_span}>{item.item.views}</span>
					</div>
					<div>
						<p className={style.text_paragraph}>{item.item.text}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
