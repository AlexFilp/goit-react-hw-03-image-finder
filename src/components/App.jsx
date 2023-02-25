import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={this.state.query} />
        <Button />
        <ToastContainer position="top-right" autoClose={3000} limit={3} />
      </div>
    );
  }
}

//  async componentDidMount() {
//     const url = `${this.#BASE_URL}?q=cat&page=1&key=${
//       this.#API_KEY
//     }&image_type=photo&orientation=horizontal&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ imageTitle: data });
//     console.log(data);
//     return data;
//   }

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
