import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, onImageClick, modalImage }) {
  return (
    <GalleryItem onClick={() => onImageClick(modalImage)}>
      <GalleryImage src={src} alt="" />
    </GalleryItem>
  );
}
