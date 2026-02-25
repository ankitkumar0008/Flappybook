import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <figure className="tile">
        <img src="../../assets1/Gemini_Generated_Image_lrc1v3lrc1v3lrc1.png" alt="Concept one" />
        <figcaption>Flappy Lite</figcaption>
      </figure>

      <figure className="tile">
        <img src="../../assets/flappy.jpg" alt="Concept two" />
        <figcaption>Flappy Pro</figcaption>
      </figure>

      <figure className="tile">
        <img src="../../assets1/Gemini_Generated_Image_7er5si7er5si7er5.png" alt="Concept three" />
        <figcaption>Flappy Max</figcaption>
      </figure>
    </section>
  );
};

export default Gallery;