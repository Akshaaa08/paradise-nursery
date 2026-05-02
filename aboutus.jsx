import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Paradise Nursery 🌿</h1>

      <p style={styles.text}>
        Welcome to <strong>Paradise Nursery</strong>, your go-to destination for
        beautiful and healthy houseplants. We believe that every home deserves a
        touch of greenery, and our mission is to make plant care simple,
        enjoyable, and accessible for everyone.
      </p>

      <p style={styles.text}>
        At Paradise Nursery, we offer a carefully curated collection of plants,
        including aromatic, medicinal, and air-purifying varieties. Whether
        you're a beginner or an experienced plant lover, we have something
        perfect for you.
      </p>

      <h3 style={styles.subheading}>🌱 What We Offer</h3>
      <ul style={styles.list}>
        <li>Aromatic plants to refresh your space</li>
        <li>Medicinal plants for natural wellness</li>
        <li>Air-purifying plants for a healthier environment</li>
        <li>Easy-to-care indoor plants for beginners</li>
      </ul>

      <h3 style={styles.subheading}>🌼 Our Mission</h3>
      <p style={styles.text}>
        Our goal is to bring nature closer to you by providing high-quality
        plants and a seamless shopping experience. We aim to inspire people to
        create greener, healthier, and more peaceful living spaces.
      </p>

      <h3 style={styles.subheading}>💚 Why Choose Us?</h3>
      <ul style={styles.list}>
        <li>High-quality, handpicked plants</li>
        <li>Affordable pricing</li>
        <li>User-friendly shopping experience</li>
        <li>Passion for plants and sustainability</li>
      </ul>

      <p style={styles.footer}>
        Bring home a plant, bring home life 🌿
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  subheading: {
    marginTop: "25px",
    fontSize: "20px",
  },
  text: {
    marginBottom: "15px",
  },
  list: {
    paddingLeft: "20px",
  },
  footer: {
    marginTop: "30px",
    fontWeight: "bold",
  },
};

export default AboutUs;