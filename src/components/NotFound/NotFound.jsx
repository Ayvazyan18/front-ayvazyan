import style from './NotFound.module.css'
import NotFoundIcon from '../../assets/images/NotFound.jpg'
import BackIcon from '../../assets/images/arrow.png'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div className={style.notFound_content}>
        <div>
            <img src={NotFoundIcon} alt="NotFound_icon" className={style.notFound_icon} />
        </div>
        <Link to={'/'} className={style.backIcon_content}>
            <img src={BackIcon} alt="Back_icon" className={style.back_icon} />
            <p>BACK</p>
        </Link>
    </div>
  )
}
