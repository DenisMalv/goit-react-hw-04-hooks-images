import { useState, useEffect, useRef} from 'react';
import { MainContainer } from './App.styled.js';

import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import QueryNav from './QueryNav/QueryNav.jsx';

import galleryApi from '../services/image-gallery-api';

const App = () => {
  const [query, setQuery] = useState('cat');
  const [page, setPage] = useState(1);
  const [queryResponponce, setQueryResponse] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (page === 1) {
      setQueryResponse([]);
    }
    setStatus('pending');
    galleryApi
      .fetchImages(query, page)
      .then(({ hits }) => {
        const smallHits = galleryApi.smallFetchResponse(hits);
        setQueryResponse(prevQueryResponponce => [
          ...prevQueryResponponce,
          ...smallHits,
        ]);
        setStatus('resolved');
        if(page !==1){
          window.scrollBy({
            top: document.body.clientHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MainContainer>
      <Searchbar>
        <SearchForm onSubmit={handleSubmit} />
        <QueryNav onSubmit={handleSubmit} />
      </Searchbar>
      {queryResponponce.length !== 0 && (
        
        <ImageGallery
          images={queryResponponce}
        />
      )}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Button nextPage={handleLoadMore} />}
    </MainContainer>
  );
};

export default App;
