import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
  url,
  tag,
  toggleModal,
  onImageClick,
}) {
  return (
    <GalleryItem>
      <GalleryImage
        src={url}
        alt={tag}
        onClick={() => {
          toggleModal();
          onImageClick();
        }}
      />
    </GalleryItem>
  );
}

