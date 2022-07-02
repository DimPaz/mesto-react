function Main(props) {
  return (
    <>
      <main className="main">
        <section className="profile">
          <img
            className="profile__avatar"
            // src="<%=require('../images/avatar/avatar.jpg')%>"
            src="../images/avatar/avatar.jpg"
            alt="фото"
          />

          <button className="profile__avatar-btn" type="button"></button>
          <div className="profile__group">
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__edit-btn opacity"
                type="button"
              ></button>
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
          <button className="profile__add-btn opacity" type="button"></button>
        </section>
        <section className="elements"></section>
      </main>

      {/* <div className="popup popup_type_profile">
        <div className="popup__container">
          <form
            className="form popup__form"
            id="editPopupForm"
            name="form"
            action="#"
            method="get"
            noValidate
          >
            <button
              className="popup__close-btn popup__close-btn_type_profile opacity"
              type="button"
            ></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <label className="form__field">
              <input
                id="name-input"
                className="popup__text popup__text_input_name form__input"
                type="text"
                name="name"
                placeholder="Имя"
                // value="Имя"
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
                // value="Профессия"
                minLength="2"
                maxLength="200"
                required
              />
              <span id="job-input-error" className="form__input-error"></span>
            </label>
            <button className="popup__save-btn" type="submit" name="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <form
            className="form popup__form"
            id="avatarPopupForm"
            name="form"
            action="#"
            method="get"
            noValidate
          >
            <button
              className="popup__close-btn popup__close-btn_type_avatar opacity"
              type="button"
            ></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <label className="form__field">
              <input
                id="link-avatar-input"
                className="popup__text popup__text_input_avatar form__input"
                type="url"
                name="link"
                placeholder={props.placeholder}
                // value=""
                required
              />
              <span
                id="link-avatar-input-error"
                className="form__input-error"
              ></span>
            </label>
            <button className="popup__save-btn" type="submit" name="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container">
          <form
            className="form popup__form"
            id="cardPopupForm"
            name="form"
            action="#"
            method="get"
            noValidate
          >
            <button
              className="popup__close-btn popup__close-btn_type_card opacity"
              type="button"
            ></button>
            <h3 className="popup__title">Новое место</h3>
            <label className="form__field">
              <input
                id="signature-input"
                className="popup__text popup__text_input_signature form__input"
                type="text"
                name="name"
                placeholder="Название"
                // value=""
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
                // value=""
                required
              />
              <span
                id="link-image-input-error"
                className="form__input-error"
              ></span>
            </label>
            <button className="popup__save-btn" type="submit" name="Создать">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <form className="form popup__form" id="deletePopup">
            <button
              className="popup__close-btn popup__close-btn_type_delete opacity"
              type="button"
            ></button>
            <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
            <button className="popup__save-btn" type="submit">
              Да
            </button>
          </form>
        </div>
      </div> */}

      <template className="template-cards">
        <article className="element">
          <img
            className="element__picture"
            src="#"
            alt="Название красивых мест"
          />
          <div className="element__group">
            <button
              className="element__trash"
              type="button"
              aria-label="Убрать в корзину"
            ></button>
            <h2 className="element__text"></h2>
            <div className="element__like-parts">
              <button
                className="element__like"
                type="button"
                aria-label="Нравится"
              ></button>
              <span className="element__count">0</span>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

// проверка попапов
const btnAvatar = document.querySelector(".profile__avatar-btn");
const popupAvatar = document.querySelector(".popup_type_avatar");
const btnPopupClose = document.querySelector(".popup__close-btn_type_avatar");

const btnProfile = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_type_profile");
const btnPopupProfileClose = document.querySelector(
  ".popup__close-btn_type_profile"
);

const btnAddCard = document.querySelector(".profile__add-btn");
const popupCard = document.querySelector(".popup_type_card");
const btnPopupCardClose = document.querySelector(".popup__close-btn_type_card");

function handleEditAvatarClick() {
  popupAvatar.classList.add("popup_opened");
}
function handleEditCloseClick() {
  popupAvatar.classList.remove("popup_opened");
}
function handleEditProfileClick() {
  popupProfile.classList.add("popup_opened");
}
function handleEditProfileCloseClick() {
  popupProfile.classList.remove("popup_opened");
}

function handleAddPlaceClick() {
  popupCard.classList.add("popup_opened");
}
function handleEditCardCloseClick() {
  popupCard.classList.remove("popup_opened");
}

// вот эти 6 строчек комментировал я (сейчас только Profile должен работать)

btnProfile.addEventListener("click", handleEditProfileClick);
btnPopupProfileClose.addEventListener("click", handleEditProfileCloseClick);

// btnAvatar.addEventListener("click", handleEditAvatarClick);
// btnPopupClose.addEventListener("click", handleEditCloseClick);

// btnAddCard.addEventListener("click", handleAddPlaceClick);
// btnPopupCardClose.addEventListener("click", handleEditCardCloseClick);

export default Main;
