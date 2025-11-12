import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import Button from "../components/Button";

// Inara Luxe Events - Homepage (split into components with hover effects and proper styling)
export default function InaraHomepage() {
  const events = [
    { title: 'Weddings', subtitle: 'Elegant ceremonies & receptions', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60' },
    { title: 'Proposals', subtitle: 'Intimate and surprising moments', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60' },
    { title: 'Corporate', subtitle: 'Conferences, launches & retreats', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60' },
    { title: 'Birthdays', subtitle: 'Playful yet refined celebrations', img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=60' },
    { title: 'Graduations', subtitle: 'Caps off in style', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=60' },
    { title: 'Custom Events', subtitle: 'Let’s build your signature experience', img: 'https://images.unsplash.com/photo-1505577058444-a3dab4b9d0b6?auto=format&fit=crop&w=800&q=60' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1505576391880-5b43a5b4d1f2?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1524492412937-4961d5f3f1c1?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1533777324565-a040eb52fac2?auto=format&fit=crop&w=800&q=60',
  ];

  const testimonials = [
    { quote: 'Inara Luxe turned our wedding into the fairytale we always wanted — every detail was perfect.', name: 'Nadia & Brian' },
    { quote: 'Professional, creative and calm under pressure. Our corporate launch felt seamless.', name: 'K. Mwangi — CEO' },
    { quote: 'Our daughter’s party was both playful and chic — highly recommend!', name: 'Amina O.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HERO */}
      <section className="relative">
        <div
          className="h-[72vh] md:h-[78vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(7,7,7,0.35), rgba(7,7,7,0.35)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1770&q=80')",
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-lg">
                Crafting Unforgettable Moments with a Touch of Luxe
              </h1>
              <p className="mt-6 text-lg md:text-xl text-amber-100/90 drop-shadow-sm">
                Bespoke planning, elegant styling and flawless coordination for weddings, proposals, corporate events and life's milestones.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact" primary>Book Your Event</Button>
                <Button href="#gallery">View Our Gallery</Button>
              </div>

              <div className="mt-8 text-sm text-white/80">
                <span className="inline-block mr-4">Starting packages from <strong>KES 60,000</strong></span>
                <span className="inline-block">Flexible payment plans available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section id="events" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Tailored planning and styling for every occasion — from intimate proposals to grand corporate galas.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} title={event.title} subtitle={event.subtitle} img={event.img} />
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-white/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Featured Gallery</h2>
              <p className="text-gray-600 mt-1">A selection of recent events styled by Inara Luxe.</p>
            </div>
            <a href="#" className="text-sm text-amber-700 font-medium hidden sm:inline">View Full Gallery →</a>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <img src={src} alt={`gallery-${i}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold">What Clients Say</h2>
        <p className="text-gray-600 mt-1">Moments captured in their own words.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section id="contact" className="bg-amber-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Let’s Create Your Perfect Event Together</h3>
            <p className="mt-2 text-amber-100/90">Reserve your date with a deposit and start planning with our team today.</p>
          </div>
          <div className="flex gap-4">
            <Button href="#" primary>Book Now</Button>
            <Button href="#">Get a Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
