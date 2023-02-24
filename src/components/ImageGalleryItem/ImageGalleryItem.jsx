import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.smallImg}
          alt=""
        />
        {this.state.showModal && (
          <Modal onClose={this.closeModal} largeImg={this.props.largeImg} />
        )}
      </li>
    );
  }
}
