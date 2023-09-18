import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      console.log('Escape');
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={this.props.largeImg} alt="" />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}
