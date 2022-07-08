import { useState, useEffect } from "react";

import Card from "./Card";
import api from "../utils/Api.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  textSabmitBtn,
}) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllData().then(([data, user]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(data);
    });
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <img className="profile__avatar" src={userAvatar} alt="фото" />

          <button
            className="profile__avatar-btn"
            type="button"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__group">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn opacity"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button
            className="profile__add-btn opacity"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="elements">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                name={item.name}
                link={item.link}
                count={item.likes.length}
                onCardClick={onCardClick}
                textSabmitBtn={textSabmitBtn}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
