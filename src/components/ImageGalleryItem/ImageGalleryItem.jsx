import React, {Component} from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
    render() {
        const { images } = this.props;

        return (
            images.map(image => (
                <li key={image.id} className={css.galleryItem}>
                    <img
                        src={image.webformatURL}
                        alt={image.type} />
                </li>
            ))
        );
    }
};

export default ImageGalleryItem