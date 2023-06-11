import React, {Component} from 'react';
import css from './Button.module.css';

class Button extends Component {
    render() {
        const loadMoreButton = this.props;

        return (
            <button type="submit" onClick={loadMoreButton}>Load more</button>
        );
    }
};

export default Button