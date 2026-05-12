import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO @ TechFlow',
    text: 'Working with this developer was a game-changer for our brand. The attention to detail and smooth animations brought our vision to life.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Marcus Chen',
    role: 'Product Design @ Linear',
    text: 'Unmatched expertise in frontend architecture. The final product was not only beautiful but extremely performant.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder @ Ethereal',
    text: 'A true artist in the digital space. The interactions feel cinematic and premium. Exactly what we were looking for.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Client <span className="text-gradient">Voices</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="glass p-8 rounded-3xl h-full flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all group">
                <div>
                  <div className="flex gap-1 text-accent-cyan mb-6">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} />
                    ))}
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-purple/30">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-white/40">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
