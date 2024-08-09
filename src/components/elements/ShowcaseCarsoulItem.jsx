import PropTypes from "prop-types";

function ShowcaseCarsoulItem({ title, description, image, alt, active, link }) {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <a href={link} alt={`Link to project: ${link}`}>
        <img src={image} className="d-block w-100" alt={alt} />
        <div
          className="carousel-caption d-none d-md-block bg-gradient text-light bg-dark "
          style={{ "--bs-bg-opacity": 0.9 }}
        >
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

ShowcaseCarsoulItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  string: PropTypes.string,
  link: PropTypes.string.isRequired,
};
export default ShowcaseCarsoulItem;
