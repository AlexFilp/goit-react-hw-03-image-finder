import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  #API_KEY = '32825732-53fa7d1ce449dfc74c3175ae8';

  #BASE_URL = 'https://pixabay.com/api/';

  state = {
    data: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ loading: true, data: null });
      setTimeout(() => {
        fetch(
          `${this.#BASE_URL}?q=${this.props.query}&page=1&key=${
            this.#API_KEY
          }&image_type=photo&orientation=horizontal&per_page=15`
        )
          .then(res => res.json())
          .then(data => {
            console.log(data.hits);
            if (data.hits.length === 0) {
              return toast.error('There is no such image!');
            }
            this.setState({ data });
          })
          .catch(error => {
            console.log(error);
            return toast.error('Something went wrong :( Please try again.');
          })
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { loading, data } = this.state;
    return (
      <>
        {loading && <Loader />}

        <ul className={css.ImageGallery}>
          {data &&
            data.hits.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  smallImg={webformatURL}
                  largeImg={largeImageURL}
                />
              );
            })}
        </ul>
      </>
    );
  }
}

// if (status === 'pending') {
//       return (
//         <div className={css.loader}>
//           <Blocks height="150" width="150" />
//         </div>
//       );
//     }

//     if (status === 'resolved') {
//       return (
//         <ul className={css.ImageGallery}>
//           {data.hits.map(({ id, webformatURL, largeImageURL }) => {
//             return <ImageGalleryItem key={id} smallImg={webformatURL} />;
//           })}
//         </ul>
//       );
//     }

//     if (status === 'rejected') {
//       return;

//  return (
//       <>
//         {loading && (
//           <div className={css.loader}>
//             <Blocks height="150" width="150" />
//           </div>
//         )}
//         <ul className={css.ImageGallery}>
//           {data &&
//             data.hits.map(({ id, webformatURL, largeImageURL }) => {
//               return <ImageGalleryItem key={id} smallImg={webformatURL} />;
//             })}
//         </ul>
//       </>
