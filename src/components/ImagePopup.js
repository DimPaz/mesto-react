function ImagePopup() {
  return (
    <>
      <div className="popup popup_type_image">
        <div className="popup__container">
          <div className="popup__form-image">
            <button
              className="popup__close-btn popup__close-btn_type_image opacity"
              type="button"
            ></button>
            <img className="popup__card-image" src="#" alt="" />
            <p className="popup__card-name"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
