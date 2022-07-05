import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  userAvatar,
  userName,
  userDescription,
  cards,
}) {
  // console.log(cards)
  return (
    <>
      <main className="main">
        <section className="profile">
          <img
            className="profile__avatar"
            // src="<%=require('../images/avatar/avatar.jpg')%>"
            src={userAvatar}
            alt="фото"
          />

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
                name={item.name}
                link={item.link}
                count={item.likes.length}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
