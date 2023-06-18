import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  showStatus: boolean;
  showThumbs: boolean;
  images: string[];
}
export default function MyCarousel({
  showStatus,
  showThumbs,
  images,
}: CarouselProps) {
  return (
    <Carousel showStatus={showStatus} showThumbs={showThumbs}>
      {images.map((image) => {
        return (
          <img
            key={image}
            src={image}
            alt="product"
            className="h-96 object-cover object-top"
          />
        );
      })}
    </Carousel>
  );
}
