import { Component } from 'react'
import { createPortal } from 'react-dom';
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component{
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown)
  }
  componentWillUnmount() { 
    window.removeEventListener('keydown', this.hendleKeyDown)
  };
  
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  };

  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal (
      <div className={s.Modal__backdrop} onClick={this.hendleBackdropClick}>
        <div className={s.Modal__content}>{ this.props.children}</div>
      </div>, modalRoot
    )
  }
}

