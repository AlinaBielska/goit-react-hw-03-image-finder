import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchedWord: '',
  }

  onSubmitInput = word => {
    
  }

  render() {
    return (
      <div>
        <Searchbar onSubmitInput={this.onSubmitInput} />
      </div>
    );
  }
};
