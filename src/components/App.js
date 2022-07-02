import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main placeholder="Ссылка на аватар" />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="profile">
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
        </PopupWithForm>
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
