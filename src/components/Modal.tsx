import React from "react"

type Props = {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.getElementById('modal');

        modal!.classList.add('hide');
    }

  return (
    <div id='modal' className="hide">
        <div className='fade' onClick={closeModal}></div>
        <div className='modal'>
            <h2>Texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal