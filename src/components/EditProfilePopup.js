import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <>
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isOpen}
        onClose={onClose}
        textSabmitBtn={"Сохранить"}
        onSabmit={handleSubmit}
      >
        <label className="form__field">
          <input
            id="name-input"
            className="popup__text popup__text_input_name form__input"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            value={name || ""}
            onChange={handleChangeName}
          />
          <span
            id="name-input-error"
            className="form__input-error form__input-error_active"
          ></span>
        </label>
        <label className="form__field">
          <input
            id="job-input"
            className="popup__text popup__text_input_job form__input"
            type="text"
            name="job"
            placeholder="Профессия"
            minLength="2"
            maxLength="200"
            required
            value={description || ""}
            onChange={handleChangeDescription}
          />
          <span id="job-input-error" className="form__input-error"></span>
        </label>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
