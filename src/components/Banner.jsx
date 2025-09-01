// Banner.jsx
import { useEffect, useState } from 'react';
import WarrantyIcon from '../assets/2.svg';
import TruckIcon from '../assets/truck.svg';
import UndoIcon from '../assets/undo.svg';
import Ad1 from '../assets/Ad_1.svg';
import Ad2 from '../assets/Ad_2.svg';
import Ad3 from '../assets/Ad_3.svg';
import Container from './Container';

const slides = [
  { id: 1, image: '/ban.svg' },
  { id: 2, image: '/ban.svg' },
  { id: 3, image: '/ban.svg' },
  { id: 4, image: '/ban.svg' },
  { id: 5, image: '/ban.svg' },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col items-center">
      <div className="w-full">
        {/* Carousel */}
        <div className="relative w-full aspect-[1920/597] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative w-full flex-shrink-0 h-full">
                {!loadedSlides[slide.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  onLoad={() => setLoadedSlides((prev) => ({ ...prev, [slide.id]: true }))}
                  className={`w-full object-cover h-full transition-opacity duration-500 ${loadedSlides[slide.id] ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            ))}
          </div>
          {/* Slide Indicators */}
          <div className="absolute top-1/2 -translate-y-1/2 left-10 flex flex-col items-start opacity-70 z-20">
            {slides.map((_, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className={`w-0.5 h-4 mr-2 transition-colors ${index === currentSlide ? "bg-black" : "bg-white"}`} />
                <span className={`text-base transition-colors ${index === currentSlide ? "text-black" : "text-white"}`}>
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty / Shipping / Return Bar */}
        <div className="relative border-[#F0F0F0] w-full">
          <div className="absolute inset-x-0 top-0 h-px bg-[#F0F0F0]" />
          <div className="absolute inset-y-0 left-0 w-px bg-[#F0F0F0]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#F0F0F0]" />
          <div className="flex justify-between items-center px-24 h-28">
            <div className="flex items-center space-x-2">
              <img src={WarrantyIcon} alt="Two years warranty" className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-800">
                Two years warranty
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={TruckIcon} alt="Free shipping" className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-800">
                Free shipping
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={UndoIcon} alt="Return policy" className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-800">
                Return policy in 30 days
              </span>
            </div>
          </div>

          {/* 3‑Image Ads Layout */}
          <Container>
            <div className="w-full px-12 py-10">
              <div className="max-w-[1604px] mx-auto flex flex-row gap-4">
                <div className="w-1/2 aspect-[4/3]">
                  <img src={Ad1} alt="Ad 1" className="w-full h-full rounded-md object-cover" />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <div className="aspect-[2/1]">
                    <img src={Ad2} alt="Ad 2" className="w-full h-full rounded-md object-cover" />
                  </div>
                  <div className="aspect-[2/1]">
                    <img src={Ad3} alt="Ad 3" className="w-full h-full rounded-md object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
