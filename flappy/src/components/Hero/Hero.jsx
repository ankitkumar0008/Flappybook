import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-art">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
        <span className="blob b3"></span>
      </div>

      <div className="hero-content">
        <h2 className="hero-title">Buy The Best</h2>
        <p className="hero-subtitle">
          Machine made for those who dream to create. Unleash your creativity with our powerful and stylish poster.
        </p>

        <a href="#features" className="btn primary-btn">Features</a>
        <a href="#gallery" className="btn secondary-btn">Buy Now</a>
      </div>
    </section>
  );
};

export default Hero;