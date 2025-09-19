import PropTypes from "prop-types"; // додаємо PropTypes
import "./Profile.css";

function Profile({ name, role, avatarUrl }) {
  return (
    <div className="profile">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// описуємо PropTypes для валідації пропсів
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Profile;
