import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          modalImage={largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryList>
  );
}
