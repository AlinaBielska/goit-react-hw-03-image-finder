import React, { Component } from 'react';
import searchImages from 'services/pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    isLoading: false,
    isError: false,
  };

  onSubmitInput = query => {
    this.setState({ query: query });
    const { page } = this.state;
    searchImages(query, page);
  };

  showResponse = async () => {
    const { query, page, images } = this.state;
    try {
      const response = await searchImages(query, page);
      this.setState(prevState => ({
        totalHits: response.data.total,
        images: [...prevState.images, ...response.data.hits],
        isLoading: true,
      }));
    } catch (error) {
      this.setState({ isError: true })
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.showResponse();
    }
  };

  loadMoreButton = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };


  render() {
    const { images, totalHits, page } = this.state;
    const totalPages = Math.ceil(totalHits / 12);

    return (
      <div>
        <Searchbar onSubmitInput={this.onSubmitInput} />
        {images.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem images={images} />
          </ImageGallery>)
        }
        {page < totalPages && <Button loadMoreButton={this.loadMoreButton} />}
      </div>
    );
  };
}
