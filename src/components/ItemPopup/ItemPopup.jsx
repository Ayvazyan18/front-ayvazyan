import React from 'react'
import CloseIcon from '../../assets/images/close.png'
import style from './ItemPopup.module.css'
import { Transition } from 'react-transition-group'


export const ItemPopup = ({isOpen, onClose, children}) => {
    const onWrapperClick = event => {
        if(event.target === event.currentTarget) onClose()
    }

	return (
		<Transition in={isOpen} timeout={350} unmountOnExit>
			{state => (
				<div className={`${style.modal} ${style[`modal--${state}`]}`}>
					<div className={style.modal_wrapper} onClick={onWrapperClick} >
						<div className={style.modal_content}>
							<button
								className={style.modalClose_btn}
								onClick={() => onClose()}
							>
								<img src={CloseIcon} alt='Close_icon' />
							</button>
							{children}
						</div>
					</div>
				</div>
			)}
		</Transition>
	)
}
