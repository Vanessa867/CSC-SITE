"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    { id: 1, image: '/imagem/slider.png' },
    { id: 2, image: '/imagem/slider2.png' },
    { id: 3, image: '/imagem/slider3.png' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        loop={true}
        // Ajuste aqui para passar sozinho sempre
        autoplay={{
          delay: 4000, // Passa a cada 4 segundos
          disableOnInteraction: false, // NÃO para de passar se o usuário clicar
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay Escuro */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Conteúdo Central */}
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg uppercase tracking-wider">
                  
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Global para as setas e pontos do carrossel */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
        }
      `}</style>
    </section>
  );
}