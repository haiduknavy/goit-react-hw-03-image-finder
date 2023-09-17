import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ response, toggleModal, onImageClick }) {
  return (
    <ImageGalleryList>
      {response.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          url={webformatURL}
          tag={tags}
          toggleModal={() => toggleModal()}
          onImageClick={() => onImageClick(id, largeImageURL, tags)}
        />
      ))}
    </ImageGalleryList>
  );
}
