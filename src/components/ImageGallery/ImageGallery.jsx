import {useState}from 'react';
import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const ImageGallery = ({ images }) => {
  const imagesMapped = images.map(elem=>elem.largeImageURL)
  const [lightbox,setLightBox] = useState({
      photoIndex: 0,
      isOpen: false,
  })






  return (
    <ImageGalleryList>
        {images.map(({ id, largeImageURL, webformatURL },idx) => (
          <ImageGalleryItem
            smalImage={webformatURL}
            key={id}
            setLightBox={setLightBox} 
            idx={idx}
          />
        ))}
        {images && lightbox.isOpen &&
            <Lightbox
            mainSrc={imagesMapped[lightbox.photoIndex]}
            nextSrc={imagesMapped[(lightbox.photoIndex + 1) % imagesMapped.length]}
            prevSrc={imagesMapped[(lightbox.photoIndex + imagesMapped.length - 1) % imagesMapped.length]}
            onCloseRequest={() => setLightBox((prevState)=>({...prevState, isOpen: false }))}
            onMovePrevRequest={() =>
              setLightBox((prevState)=>({...prevState,
                photoIndex: (lightbox.photoIndex + imagesMapped.length - 1) % imagesMapped.length,
              }))
            }
            onMoveNextRequest={() =>
              setLightBox((prevState)=>({...prevState,
                photoIndex: (lightbox.photoIndex + 1) % imagesMapped.length,
              }))
            }
          />
        }
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
