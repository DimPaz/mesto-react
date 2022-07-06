function Card({ card, name, link, count, onCardClick }) {
  function handleClick() {
    {
      onCardClick(card);
    }
  }

  return (
    <>
      <article className="element">
        <img
          className="element__picture"
          src={link}
          alt={name}
          onClick={handleClick}
        />
        <div className="element__group">
          <button
            className="element__trash"
            type="button"
            aria-label="Убрать в корзину"
          ></button>
          <h2 className="element__text">{name}</h2>
          <div className="element__like-parts">
            <button
              className="element__like"
              type="button"
              aria-label="Нравится"
            ></button>
            <span className="element__count">{count}</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
