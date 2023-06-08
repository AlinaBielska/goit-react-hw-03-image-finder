import React, { Component } from 'react';
// import css from './Searchbar.module.css';

class Searchbar extends Component {

    onSubmitInput = evt => {
        evt.preventDefault();
        
    }

    render() {
        return (
            <header class="searchbar">
                <form class="form" onSubmit={this.onSubmitInput}>
                    <button type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar