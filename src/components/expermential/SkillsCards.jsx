import PropTypes from "prop-types";

function SkillsCards({ title, text, icon }) {
  const CardTitle = title;
  const CardText = text;
  const IconClass = icon;

  return (
    <div className="col-md-4">
      <div className="card mb-4 rounded-4 border-0 p-3 bg-secondary text-light">
        <div className="card-body text-center">
          <i
            style={{ fontSize: "5rem" }}
            className={`bi ${IconClass} text-light bg-primary rounded-circle p-3`}
          ></i>
          <h5 className="card-title fs-3 pt-2 fw-bold">{CardTitle}</h5>
          <p className="card-text fs-6 blockquote">{CardText}</p>
        </div>
      </div>
    </div>
  );
}

SkillsCards.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillsCards;
