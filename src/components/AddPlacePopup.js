import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [nameCard, setNameCard] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setNameCard("");
    setLink("");
  }, [isOpen]);

  function handleChangeNameCard(e) {
    setNameCard(e.target.value);
  }
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameCard,
      link,
    });
  }

  return (
    <>
      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={isOpen}
        onClose={onClose}
        textSabmitBtn={"Создать"}
        onSabmit={handleSubmit}
      >
        <label className="form__field">
          <input
            id="signature-input"
            className="popup__text popup__text_input_signature form__input"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            value={nameCard}
            onChange={handleChangeNameCard}
          />
          <span id="signature-input-error" className="form__input-error"></span>
        </label>
        <label className="form__field">
          <input
            id="link-image-input"
            className="popup__text popup__text_input_image form__input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
            value={link}
            onChange={handleChangeLink}
          />
          <span
            id="link-image-input-error"
            className="form__input-error"
          ></span>
        </label>
      </PopupWithForm>
      ;
    </>
  );
}

export default AddPlacePopup;
