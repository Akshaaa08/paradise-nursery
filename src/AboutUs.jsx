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
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#2d5016', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
        About Us
      </h1>
      <div style={{ width: '60px', height: '4px', background: '#6ea832', borderRadius: '2px', marginBottom: '2rem' }} />

      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#333' }}>
        Welcome to Paradise Nursery — your trusted destination for beautiful, healthy houseplants.
        We are a passionate team of horticulturists and plant lovers dedicated to helping you bring
        the beauty of nature into your home and workspace.
      </p>

      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        Founded with the belief that every home deserves a touch of greenery, Paradise Nursery
        was built to make plant ownership accessible and enjoyable for everyone — from first-time
        plant parents to seasoned garden enthusiasts.
      </p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#4a7c2f', fontSize: '1.4rem', margin: '2rem 0 0.75rem' }}>
        Our Mission
      </h2>
      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        Our mission is to connect people with nature by offering a carefully curated selection
        of high-quality plants that improve well-being, purify the air, and bring life and colour
        to every indoor space. We are committed to sustainable sourcing, responsible packaging,
        and providing expert guidance so every plant thrives in its new home.
      </p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#4a7c2f', fontSize: '1.4rem', margin: '2rem 0 0.75rem' }}>
        Our Services
      </h2>
      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        We offer a wide range of indoor plants across three specialist categories:
        <strong> Aromatic Plants</strong> such as lavender, rosemary, and jasmine for natural fragrance;
        <strong> Medicinal Plants</strong> like aloe vera, chamomile, and peppermint for everyday wellness;
        and <strong>Air Purifying Plants</strong> including spider plants, peace lilies, and snake plants
        to improve the air quality in your home.
      </p>
      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: '#444' }}>
        Every order comes with detailed care instructions tailored to each plant. We also provide
        a full satisfaction guarantee — if you are not happy with your purchase, we will replace
        or refund it with no questions asked. Our team is always on hand to offer personalised
        plant care advice and support.
      </p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#4a7c2f', fontSize: '1.4rem', margin: '2rem 0 0.75rem' }}>
        Why Choose Us
      </h2>
      <p style={{ fontSize: '1.05rem', color: '#444' }}>
        At Paradise Nursery, we hand-select every plant for health and vitality before it reaches
        you. We package with care to ensure safe delivery, and we back every sale with our quality
        guarantee. We are more than a plant shop — we are a growing community of people who believe
        that a little greenery makes life better. Welcome to Paradise. 🌿
      </p>
    </div>
  );
}

export default AboutUs;