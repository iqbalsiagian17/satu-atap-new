import { useState } from 'react';
import { wrappedSlides } from '../data/wrapped';

const WrappedPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < wrappedSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = wrappedSlides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Slide Content */}
      <div
        className="flex-grow flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: slide.backgroundColor || '#1e3a8a',
          color: slide.textColor || '#ffffff',
        }}
      >
        {/* Background Image */}
        {slide.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {slide.title}
          </h1>
          
          {slide.subtitle && (
            <p className="text-2xl md:text-3xl mb-8 opacity-90 animate-fade-in-delay">
              {slide.subtitle}
            </p>
          )}

          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            {slide.narrative}
          </p>

          {slide.stats && slide.stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 animate-fade-in-delay-3">
              {slide.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          {currentSlide < wrappedSlides.length - 1 && (
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white text-sm">
              Slide {currentSlide + 1} of {wrappedSlides.length}
            </span>
            {currentSlide === wrappedSlides.length - 1 && (
              <a
                href="/"
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Back to Home
              </a>
            )}
          </div>
          
          {/* Dots Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {wrappedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="bg-gray-800 py-3 text-center text-white text-sm">
        <span className="opacity-75">
          Use arrow keys or swipe to navigate • Press ESC to exit
        </span>
      </div>

      {/* Keyboard Navigation */}
      <div className="hidden">
        {/* This enables keyboard navigation */}
        <button
          onClick={prevSlide}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'Escape') window.location.href = '/';
          }}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </div>
  );
};

export default WrappedPage;
