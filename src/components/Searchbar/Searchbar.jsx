import React, { Component } from 'react';
// import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    };
    
    onInputChange = e => {
        this.setState({ query: e.target.value });
    };

    onSubmitForm = e => {
        e.preventDefault();
        const { onSubmitInput } = this.props;
        const { query } = this.state;
        if (query.length === 0) {
            alert("Napisz coś")
        } else {
            onSubmitInput(query);
            this.setState({ query: "" });

        }
    };

    render() {
        const onInputChange = this.onInputChange;
        const onSubmitForm = this.onSubmitForm;

        return (
            <header class="searchbar">
                <form class="form" onSubmit={onSubmitForm}>
                    <button type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange= {onInputChange}
                    />
                </form>
            </header>
        );
    }
};

export default Searchbar