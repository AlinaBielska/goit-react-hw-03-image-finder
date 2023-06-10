import React, { Component } from 'react';
import searchImages from 'services/pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
  };

  onSubmitInput = query => {
    this.setState({ query: query });
  };


  render() {
    return (
      <div>
        <Searchbar onSubmitInput={this.onSubmitInput} />
        <ImageGallery />
        <Button />
      </div>
    );
  }
};
