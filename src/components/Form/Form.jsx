import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../../assets/images/loading.gif'
import Item from './ItemsForm/ItemsForm'
import style from './Form.module.css'
import { ItemPopup } from '../ItemPopup/ItemPopup'

export default function Form({ searchValue }) {
	const [item, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [selectedItem, setSelectedItem] = useState(null)

	const searchFilter = item
		.filter((post, index) => ({
			...post,
			id: index,
		}))
		.filter(post =>
			post.title.toLowerCase().includes(searchValue.toLowerCase())
		)

	useEffect(() => {
		async function getData() {
			setIsLoading(true)
			try {
				const { data } = await axios.get(
					'https://cloud.codesupply.co/endpoint/react/data.json'
				)
				setItems(data)
			} catch (error) {
				console.log('Error fetching data:', error)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [])

	return (
		<div className={style.items_content}>
			{isLoading ? (
				<img src={Loading} alt='loading_gif' />
			) : searchFilter.length > 0 ? (
				searchFilter.map((item, i) => (
					<main key={i} className={style.main}>
						<section className={style.section}>
							<button
								className={style.item_btn}
								onClick={() => setSelectedItem(item)}
							>
								<div className={style.item_content}>
									<Item
										title={item.title}
										text={item.text}
										tags={item.tags}
										autor={item.autor}
										img={item.img}
										srcSet={item.img_2x}
										date={item.date}
										views={item.views}
									/>
								</div>
							</button>
						</section>
					</main>
				))
			) : (
				<p>Nothing found</p>
			)}
			{selectedItem && (
				<ItemPopup
					isOpen={!!selectedItem}
					onClose={() => setSelectedItem(null)}
				>
					<div className={style.item_content}>
						<Item
							title={selectedItem.title}
							text={selectedItem.text}
							tags={selectedItem.tags}
							autor={selectedItem.autor}
							img={selectedItem.img}
							srcSet={selectedItem.img_2x}
							date={selectedItem.date}
							views={selectedItem.views}
						/>
					</div>
				</ItemPopup>
			)}
		</div>
	)
}
