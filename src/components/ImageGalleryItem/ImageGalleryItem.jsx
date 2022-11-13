import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';


const ImageGalleryItem = ({
  smalImage,
  setLightBox,
  idx
}) => {
  return (
    <Item>
      <Image
        src={smalImage}
        alt="#"
        onClick={() => {
          setLightBox((prevState)=>({...prevState,photoIndex:idx,isOpen:true}))
        }}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  smalImage: propTypes.string.isRequired,
};

export default ImageGalleryItem;
