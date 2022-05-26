import React from 'react';
import PropTypes from 'prop-types';
import close from '../icons/close.svg';

export default function Photo(props) {
  const [clicked, changeClicked] = React.useState(false);
  const { image } = props;
  const openPopup = () => {
    changeClicked(true);
  };
  const closePopup = () => {
    changeClicked(false);
  };
  return (
    <div>
      <button type="button" onClick={openPopup} className="photo-button">
        <img className="gallery-photo" src={image} alt="" />
      </button>
      {clicked
        && (
        <div className="popup">
          <button className="close-button" onClick={closePopup} type="button">
            <img className="close-popup" src={close} alt="" />
          </button>
          <img className="popup-photo" src={image} alt="" />
        </div>
        )}
    </div>
  );
}

Photo.propTypes = {
  image: PropTypes.string.isRequired,
};
