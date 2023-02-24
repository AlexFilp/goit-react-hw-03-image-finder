import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.error('Please write something!');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form className={css.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={this.handleQueryChange}
          name="searchQuery"
          value={this.state.searchQuery}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
