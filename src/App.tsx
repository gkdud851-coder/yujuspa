/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe,
  HeartPulse,
  Instagram, 
  MapPin, 
  Sparkles, 
  Scissors, 
  Heart, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Clock, 
  Copy, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Award,
  Volume2,
  VolumeX
} from 'lucide-react';

// Background music path (from public directory)
const bgMusic = "/Give Thanks (Piano Cover) - Joshua Domfeh (128k).mp3";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = 0.8;
      audioRef.current.volume = 0.4; // Set a lower volume for a calm atmosphere
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Address copied to clipboard!');
  };

  const journeySteps = [
    {
      step: "Step 1",
      title: "Your First Sip of Relief (Preparation)",
      description: "Change into our freshly laundered, ultra-comfortable Yuju Signature Gown and feel the first layer of stress melt away. To begin your experience, we welcome you with a Refreshing Watermelon Juice.",
      icon: "🍹",
      img: "수박주스.jpg"
    },
    {
      step: "Step 2",
      title: "Purifying Your Foundation (Herbal Foot Bath)",
      description: "Soak your feet in a personal tub, beautifully infused with fresh lime and lemongrass for a natural detox and to ease fatigue. Your dedicated therapist will gently cleanse your feet using natural sea salt.",
      icon: "🍋",
      img: "허브 족욕.jpg"
    },
    {
      step: "Step 3",
      title: "Crown to Comfort (Head Spa & Facial)",
      description: "After discussing your preference for our optional fresh cucumber facial mask, you will enjoy a deeply soothing Head Spa. A delicate scalp massage will ease tension and calm your mind.",
      icon: "💆‍♀️",
      img: ["_A746145.jpg", "_A746026.jpg", "_A746022.jpg"]
    },
    {
      step: "Step 4",
      title: "The Art of Acupressure (Signature Blend)",
      description: "This core sequence seamlessly blends our systematic body-point massage program with the unique, years-long expertise of your therapist. Designed for perfect muscle release.",
      icon: "✨",
      img: ["4번 1.jpg", "_A746089.jpg", "_A745989.jpg"]
    },
    {
      step: "Step 5",
      title: "Deepening the Harmony (Hot Stone & Oil Synergy)",
      description: "Melt away any remaining tension as we apply warm stones and premium oils to your deeply relaxed muscles. The gentle warmth maximizes muscle recovery and deep relaxation.",
      icon: "🪨",
      img: "스톤 오일 테라피.jpg"
    },
    {
      step: "Step 6",
      title: "Reawakening (Revitalizing Stretching)",
      description: "Finish your journey with a guided, gentle stretching session. We help you awaken unused muscles and realign your body's balance, ensuring you leave feeling truly refreshed.",
      icon: "🧘‍♀️",
      img: "마무리 스트레칭-1.jpg"
    }
  ];

  const facilitiesImages = [
    '매장1.jpg', '매장2.jpg', '매장3.jpg', '매장4.jpg', '매장5.jpg', 
    '매장6.jpg', '매장8.jpg', '매장9.jpg', '매장10.jpg'
  ];

  return (
    <div className="min-h-screen bg-yuju-bg font-sans selection:bg-yuju-primary selection:text-white">
      {/* Background Music */}
      <audio ref={audioRef} src={bgMusic} loop />
      
      {/* Music Toggle Button */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-yuju-primary/20 flex items-center justify-center text-yuju-primary hover:bg-yuju-primary hover:text-white transition-all duration-300 group"
        aria-label="Toggle Music"
      >
        {isMusicPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        <span className="absolute right-14 bg-black/70 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
          {isMusicPlaying ? 'Mute' : 'Play Music'}
        </span>
      </button>
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto max-w-[650px] px-6 flex items-center justify-between">
          <div className={`font-light tracking-[4px] text-xl transition-colors ${scrolled ? 'text-yuju-primary' : 'text-white'}`}>
            YUJU SPA
          </div>
          <div className="flex items-center gap-4">
            <a href="#booking" className={`hidden sm:block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${scrolled ? 'bg-yuju-primary text-white' : 'bg-white text-yuju-primary'}`}>
              Book Now
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-yuju-primary' : 'text-white'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white p-10 flex flex-col justify-center space-y-8"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-yuju-primary"><X size={32} /></button>
            {['Journey', 'Services', 'Facilities', 'Location'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-light text-yuju-primary tracking-widest uppercase">{item}</a>
            ))}
            <div className="pt-10 border-t border-gray-100">
              <p className="text-sm text-gray-400 mb-4">Follow us</p>
              <div className="flex gap-4">
                <Instagram className="text-yuju-primary" />
                <MessageCircle className="text-yuju-primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-[650px] bg-white shadow-2xl overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="메인2.mp4" type="video/mp4" />
          </video>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 px-6 pt-32"
          >
            <p className="text-white/90 text-sm tracking-[4px] uppercase mb-10">Ho Chi Minh City</p>
            <a href="#booking" className="inline-block bg-white text-yuju-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yuju-primary hover:text-white transition-all shadow-xl">
              Book Your Journey
            </a>
          </motion.div>
        </section>

        {/* Brand Story & Trust */}
        <section className="py-20 px-8 bg-yuju-bg/30 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <Heart className="mx-auto text-yuju-primary mb-6 w-8 h-8" />
            <p className="italic text-lg text-gray-600 leading-relaxed mb-6">
              "I promise to prepare your tomorrow with the cleanest towels and the most sincere touch."
            </p>
            <div className="font-bold text-yuju-primary tracking-widest uppercase text-sm">
              — Madam YUJU, Ho Chi Minh —
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <TrustItem icon={<HeartPulse />} title="Heart Fund" desc="Vietnam Kids Support (1 Child/Month)" />
            <TrustItem icon={<Globe />} title="Disaster Relief" desc="Earthquake & Flood" />
            <TrustItem icon={<Heart />} title="Kids & Prenatal" desc="Specialized Care" />
            <TrustItem icon={<ShieldCheck />} title="Premium Hygiene" desc="1:1 Towel & Tub" />
            <TrustItem icon={<Sparkles />} title="Shower Room" desc="Full Facilities" />
            <TrustItem icon={<Clock />} title="Luggage Storage" desc="Free Service" />
          </div>
        </section>

        {/* The YUJU Signature Journey (6 Steps) */}
        <section id="journey" className="py-20 px-6">
          <SectionHeader title="The Signature Journey" subtitle="6 Steps to Complete Rejuvenation" />
          
          <div className="space-y-24 mt-16">
            {journeySteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -top-4 -left-4 bg-yuju-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg">
                    {index + 1}
                  </div>
                  {Array.isArray(step.img) ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      loop={true}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      className="rounded-2xl shadow-xl w-full aspect-[4/3]"
                    >
                      {step.img.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img src={img} alt={`${step.title} ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img src={step.img as string} alt={step.title} className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                  )}
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="text-4xl">{step.icon}</div>
                  <h3 className="text-2xl font-light text-yuju-primary uppercase tracking-wide">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spa & Nail Services */}
        <section id="services" className="py-20 px-8 bg-yuju-bg/20">
          <SectionHeader title="Our Services" subtitle="Tailored Wellness & Beauty" />
          
          <div className="mt-12 space-y-10">
            {/* Text-based Menu */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <h4 className="text-center text-yuju-primary font-bold uppercase tracking-widest mb-10 pb-4 border-b border-yuju-bg">Massage Menu</h4>
              <div className="space-y-8">
                <MenuItem 
                  name="YUJU Signature Massage" 
                  time="90 / 120 min" 
                  price="700k / 890k VND" 
                  isRecommended={true}
                  description="A signature treatment unique to YUJU SPA, focusing on the true essence and quality of massage. Includes: Foot Bath (Lime, Lemongrass, Himalayan Salt), Mini Facial (Fresh Cucumber Pack), Hot Stone, Herbal Pillow, Signature Blended Essential Oil, and Full Body Massage."
                />
                <MenuItem 
                  name="Focused Massage" 
                  time="60 min" 
                  price="500k VND" 
                  description="Choose between: 1) Leg & Foot Massage with Hot Stones (Focus on soles, calves, thighs, hips) or 2) Upper Body Massage with Hot Stones (Focus on neck, shoulders, back and lower back)."
                />
                <MenuItem 
                  name="Kids Massage" 
                  time="60 / 90 min" 
                  price="400k / 500k VND" 
                  description="A gentle massage designed for growing children to help relieve physical tension and promote relaxation, balance and body awareness."
                />
              </div>
              <div className="mt-12 text-center pt-6 border-t border-gray-50">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-6 leading-loose">
                  All prices are in VND (000's) <br/>
                  Prices include service charge and VAT
                </p>
                <a href="#booking" className="inline-block bg-yuju-primary text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md">
                  Book This Journey
                </a>
              </div>
            </div>

            {/* Nail Portfolio */}
            <div className="space-y-6">
              <h4 className="text-center text-yuju-primary font-bold uppercase tracking-widest">Nail Art Portfolio</h4>
              <div className="elfsight-app-1ec4162b-93c1-480f-b22d-37906b7b7404" data-elfsight-app-lazy></div>
            </div>
          </div>
        </section>

        {/* Facilities Slider */}
        <section id="facilities" className="py-20">
          <SectionHeader title="Our Space" subtitle="Designed for Tranquility" />
          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="w-full h-[450px]"
            >
              {facilitiesImages.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center bg-[#fafafa]">
                  <img src={img} alt={`Facility ${index + 1}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Location & Contact */}
        <section id="location" className="py-20 px-8">
          <SectionHeader title="Find Us" subtitle="In the Heart of Ho Chi Minh" />
          
          <div className="mt-10 space-y-8">
            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] bg-gray-100">
<iframe
  src="https://maps.google.com/maps?q=38%20Lê%20Lai,%20Bến%20Thành,%20Quận%201,%20Hồ%20Chí%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>            </div>

            <div className="text-center">
              <a href="지도.jpg" target="_blank" rel="noopener noreferrer" className="text-xs text-yuju-primary underline tracking-widest uppercase">
                View Static Map Image
              </a>
            </div>

            {/* Address & Copy */}
            <div className="bg-yuju-bg p-6 rounded-2xl flex items-start justify-between gap-4">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-yuju-primary uppercase tracking-widest">Address</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    38 Lê Lai, Bến Thành, Quận 1, Hồ Chí Minh, Vietnam
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-yuju-primary uppercase tracking-widest">Phone</p>
                  <a href="tel:+84383811251" className="text-sm text-gray-600 hover:text-yuju-primary transition-colors">
                    +84 383 811 251
                  </a>
                </div>
              </div>
              <button 
                onClick={() => copyToClipboard('123 Le Thanh Ton, District 1, Ho Chi Minh City')}
                className="p-3 bg-white rounded-full text-yuju-primary shadow-sm hover:shadow-md transition-all"
              >
                <Copy size={18} />
              </button>
            </div>

            {/* Booking Channels */}
            <div id="booking" className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              <SocialBtn icon={<Instagram />} label="Insta" color="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" href="https://www.instagram.com/yuju.spa_hochiminh/" />
              <SocialBtn icon={<MessageCircle />} label="WhatsApp" color="bg-[#25D366]" href="https://wa.me/+84383811251" />
              <SocialBtn icon={<Phone />} label="Call" color="bg-green-500" href="tel:+84383811251" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-yuju-primary py-16 px-8 text-center text-white">
          <div className="text-2xl font-light tracking-[8px] mb-6 uppercase">YUJU SPA</div>
          <div className="flex justify-center gap-6 mb-10">
            <a href="https://www.instagram.com/yuju.spa_hochiminh/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/84903811251" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="tel:+84903811251" className="hover:text-white/70 transition-colors">
              <Phone size={20} />
            </a>
          </div>
          <p className="text-[10px] text-white/50 font-bold tracking-[4px] uppercase">
            © 2026 YUJU SPA & NAIL Ho Chi Minh City
          </p>
        </footer>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-light text-yuju-primary tracking-widest uppercase">{title}</h2>
      {subtitle && <p className="text-xs text-gray-400 uppercase tracking-widest">{subtitle}</p>}
      <div className="w-12 h-px bg-yuju-primary mx-auto mt-4"></div>
    </div>
  );
}

function TrustItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <div className="text-yuju-primary flex justify-center">{React.cloneElement(icon as React.ReactElement, { size: 28 })}</div>
      <h5 className="font-bold text-sm uppercase tracking-wider">{title}</h5>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );
}

function MenuItem({ name, time, price, description, isRecommended }: { name: string, time: string, price: string, description?: string, isRecommended?: boolean }) {
  return (
    <div className="space-y-2 pb-4 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start gap-4">
        <div className="text-left flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bold text-yuju-primary uppercase tracking-wider text-sm leading-tight">{name}</p>
            {isRecommended && (
              <span className="bg-[#D4F1B4] text-[#4A5D23] text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shrink-0">Recommended</span>
            )}
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{time}</p>
        </div>
        <div className="text-right font-bold text-yuju-primary whitespace-nowrap shrink-0 pt-0.5 text-sm">
          {price}
        </div>
      </div>
      {description && <p className="text-[11px] text-gray-500 leading-relaxed italic">{description}</p>}
    </div>
  );
}

function SocialBtn({ icon, label, color, href }: { icon: React.ReactNode, label: string, color: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${color} text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform`}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </a>
  );
}
