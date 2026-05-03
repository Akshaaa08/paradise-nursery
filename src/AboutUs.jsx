import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{
      maxWidth: '860px',
      margin: '3rem auto',
      padding: '2.5rem 2rem',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      fontFamily: 'Lato, sans-serif',
      color: '#1a1a1a',
      lineHeight: '1.8',
    }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#2d5016', fontSize: '2.4rem', marginBottom: '0.5rem' }}>
        About Paradise Nursery
      </h1>
      <div style={{ width: '60px', height: '4px', background: '#6ea832', borderRadius: '2px', marginBottom: '2rem' }} />

      <p style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: '#333' }}>
        Paradise Nursery was founded with a simple but powerful belief — that every home deserves a touch of nature.
        We are a passionate team of horticulturists, plant enthusiasts, and garden lovers dedicated to bringing the
        beauty of the outdoors inside your living spaces.
      </p>

      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        Our mission is to make plant parenthood accessible, enjoyable, and rewarding for everyone — whether you're
        a seasoned gardener or just discovering your green thumb for the very first time. We carefully hand-select
        every plant in our collection, ensuring each one is healthy, thriving, and ready to become part of your home.
      </p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#4a7c2f', fontSize: '1.5rem', margin: '2rem 0 0.75rem' }}>
        What We Offer
      </h2>
      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        We specialize in three distinct plant categories: <strong>Aromatic Plants</strong> like lavender, rosemary,
        and jasmine that fill your home with natural fragrance; <strong>Medicinal Plants</strong> such as aloe vera,
        chamomile, and peppermint that offer wellness benefits; and <strong>Air Purifying Plants</strong> like
        spider plants, peace lilies, and snake plants that improve the air quality in your home.
      </p>

      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        Every purchase from Paradise Nursery comes with detailed care instructions, so you have all the knowledge
        you need to help your new plant friend thrive. We also offer a satisfaction guarantee — if you're not
        completely happy with your plant, we will replace or refund it, no questions asked.
      </p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#4a7c2f', fontSize: '1.5rem', margin: '2rem 0 0.75rem' }}>
        Our Promise
      </h2>
      <p style={{ fontSize: '1.05rem', color: '#444' }}>
        At Paradise Nursery, we are committed to sustainability, quality, and community. We source our plants
        responsibly and package them carefully to minimize our environmental footprint. Our goal is to grow a
        community of plant lovers who find joy, calm, and connection through the simple act of nurturing life.
        Welcome to Paradise — your green journey starts here. 🌿
      </p>
    </div>
  );
}

export default AboutUs;