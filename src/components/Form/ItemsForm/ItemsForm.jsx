import style from './ItemsForm.module.css'

export default function Item(props) {
	return (
		<div className={style.itemForm_content}>
			<picture className={style.itemImg_content}>
				<source srcSet={props.srcSet} media='(max-width: 360px)' />
				<img src={props.img} alt='Item_img' className={style.img} />
			</picture>
			<div className={style.itemInfo_content}>
				<div className={style.tags_content}>{props.tags}</div>
				<p className={style.title_content}>{props.title}</p>
				<div className={style.postMeta_content}>
					<p className={style.autor_paragraph}>{props.autor}</p>
					<span className={style.firstDate_span}>{props.date}</span>
					<span className={style.secondDate_span}>{props.views}</span>
				</div>
				<div>
					<p className={style.text_paragraph}>{props.text}</p>
				</div>
			</div>
		</div>
	)
}
