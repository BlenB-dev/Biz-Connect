import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Sliderimage() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval time here (e.g., 3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full max-w-[890px] h-[300px] overflow-hidden group"
      style={{ marginTop: -100, marginLeft: -90 }}
    >
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
        className="absolute inset-0 rounded-2xl duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
        style={{ transform: 'translateY(-50%)' }}
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
        style={{ transform: 'translateY(-50%)' }}
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Dots Indicator */}
      <div
        className="absolute bottom-4 left-[50%] transform -translate-x-[50%] flex space-x-2"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className={currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliderimage;
