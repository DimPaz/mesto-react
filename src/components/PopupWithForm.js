function PopupWithForm(props) {
  // console.log(props.children);
  return (
    <>
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <form
            className="form popup__form"
            id="editPopupForm"
            name={`${props.name}-form`}
            action="#"
            method="get"
            noValidate
          >
            <button
              className={`popup__close-btn popup__close-btn_type_${props.name} opacity`}
              type="button"
            ></button>
            <h3 className="popup__title">{props.title}</h3>
            {props.children}
            <button className="popup__save-btn" type="submit" name="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
