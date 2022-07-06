import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import api from "../utils/Api.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardPopupOpen, setImageCardPopupOpen] = useState(false);

  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    api.getAllData().then(([data, user]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(data);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    // console.log("Не дави на аватар!");
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // console.log("Не дави на профиль!");
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // console.log("Не дави на карточку!");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImageCardPopupOpen(true);
    // console.log("Не дави на фотку!");
  }

  function closeAllPopups() {
    // console.log("закрыть попап");
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
          userAvatar={userAvatar}
          userName={userName}
          userDescription={userDescription}
          cards={cards}
          // selectedCard={getSelectedCard}
        />

        <Footer />
        {/* аватар */}
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
        >
          <label className="form__field">
            <input
              id="name-input"
              className="popup__text popup__text_input_name form__input"
              type="text"
              name="name"
              placeholder="Имя"
              // value={"Имя"}
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
        >
          <label className="form__field">
            <input
              id="signature-input"
              className="popup__text popup__text_input_signature form__input"
              type="text"
              name="name"
              placeholder="Название"
              // value={""}
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
