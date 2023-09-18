import Loader from 'Components/Loader/Loader';
import { Component } from 'react';
import fetchGallery from '../../api/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { AppWrap } from './App.styled';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    loading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.searchImg(searchQuery, page);
    }
    return;
  }

  handleChangeSearch = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        page: 1,
        images: [],
      });
    }
    return;
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  searchImg = async () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();

    try {
      const data = await fetchGallery(searchQuery, page);
      this.setState(({ images }) => {
        return { images: [...images, ...data.hits] };
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.toggleLoading();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = image => {
    this.setState({ modalImage: image });
    this.toggleModal();
  };

  handlerLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, showModal, modalImage, page, loading } = this.state;

    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleChangeSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
        )}
        {showModal && (
          <Modal largeImg={modalImage} onClose={this.toggleModal} />
        )}
        {images.length > 0 && images.length / page === 12 && (
          <Button onButtonClick={this.handlerLoadMore} />
        )}
        {loading && <Loader />}
      </AppWrap>
    );
  }
}
