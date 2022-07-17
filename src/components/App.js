import { useState, useEffect } from "react";
import {
  CurrentUserContext,
  CardContext,
} from "../contexts/CurrentUserContext";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageCardPopupOpen, setImageCardPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllData().then(([data, user]) => {
      setCurrentUser(user);
      setCards(data);
    });
  }, []);

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newArrayCards = cards.filter((item) => item._id !== card._id);
        setCards(newArrayCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (isLiked) {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .addLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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

  function handleUpdateAvatar({ avatar }) {
    api
      .addAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .addUserInfo(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
          <div className="page">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCardClick={handleCardClick}
            />

            <Footer />
            {/* аватар */}
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

            {/* профиль */}
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

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
        </CardContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
