import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardPopupOpen, setImageCardPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImageCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImageCardPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />
        {/* аватар */}
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          textSabmitBtn={"Сохранить"}
        >
          <label className="form__field">
            <input
              id="link-avatar-input"
              className="popup__text popup__text_input_avatar form__input"
              type="url"
              name="link"
              placeholder="Ссылка на аватар"
              // value={""}
              required
            />
            <span
              id="link-avatar-input-error"
              className="form__input-error"
            ></span>
          </label>
        </PopupWithForm>

        {/* профиль */}
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          textSabmitBtn={"Сохранить"}
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
              // value={"Профессия"}
              minLength="2"
              maxLength="200"
              required
            />
            <span id="job-input-error" className="form__input-error"></span>
          </label>
        </PopupWithForm>

        {/* карта */}
        <PopupWithForm
          title="Новое место"
          name="card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          textSabmitBtn={"Создать"}
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
            />
            <span
              id="signature-input-error"
              className="form__input-error"
            ></span>
          </label>
          <label className="form__field">
            <input
              id="link-image-input"
              className="popup__text popup__text_input_image form__input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              // value={""}
              required
            />
            <span
              id="link-image-input-error"
              className="form__input-error"
            ></span>
          </label>
        </PopupWithForm>

        <ImagePopup
          isOpen={isImageCardPopupOpen}
          onClose={closeAllPopups}
          selectedCard={selectedCard}
        />
      </div>
    </>
  );
}

export default App;
