import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="feature-card">
        <div className="feature-icon">★</div>
        <h3 className="feature-title">Premium Build</h3>
        <p className="feature-text">
            Crafted with care, using high-quality materials for durability and style.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">✦</div>
        <h3 className="feature-title">AI Integration</h3>
        <p className="feature-text">
          Integrated AI features for enhanced performance and smart functionality.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">✓</div>
        <h3 className="feature-title">Light Weight</h3>
        <p className="feature-text">
            Designed to be lightweight and portable, perfect for on-the-go creativity.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">⚡</div>
        <h3 className="feature-title">Performance</h3>
        <p className="feature-text">
            Equipped with powerful hardware to handle demanding creative tasks with ease.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔋</div>
        <h3 className="feature-title">Long Battery Life</h3>
        <p className="feature-text">
            Enjoy extended usage with our optimized battery performance.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">♻️</div>
        <h3 className="feature-title">Eco-Friendly</h3>
        <p className="feature-text">
            Made with sustainable materials and eco-conscious manufacturing processes.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🌐</div>
        <h3 className="feature-title">Connectivity</h3>
        <p className="feature-text">
            Seamless connectivity with multiple ports and wireless capabilities.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">⚙️</div>
        <h3 className="feature-title">Customizable</h3>
        <p className="feature-text">
            Fully customizable interface to suit your unique creative workflow.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🎯</div>
        <h3 className="feature-title">Easy to Use</h3>
        <p className="feature-text">
            Intuitive interface designed for seamless user experience and ease of use.
        </p>
      </div>
    </section>
  );
};

export default Features;