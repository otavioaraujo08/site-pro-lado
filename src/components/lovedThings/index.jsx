import "./styles.css";
import PropTypes from "prop-types";

export const LovedThings = ({ title, image }) => {
  if (typeof title === "undefined" || typeof image === "undefined") {
    return <div>Erro ao carregar dados.</div>;
  }

  return (
    <div className="itemDiv">
      <h1 className="itemTitle">{title}</h1>
      <img src={image} alt={title} />
    </div>
  );
};

LovedThings.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
