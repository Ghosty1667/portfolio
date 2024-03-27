import PropTypes from "prop-types";

function ProfileInformation({ label, value, icon }) {
  return (
    <li className="list-group-item mb-3">
      <h5 className="text-transform">
        <i className={`bi ${icon} text-primary`}></i> {label}
      </h5>
      <p>{value}</p>
    </li>
  );
}

ProfileInformation.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ProfileInformation;
