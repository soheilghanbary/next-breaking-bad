import { CharacterProps } from "interfaces";
import { FC } from "react";

const CharacterItem: FC<CharacterProps> = (props) => {
  const { nickname, name, img, birthday } = props;

  return (
    <div className="card">
      <img src={img} className="card__image" />
      <div className="card__content">
        <div className="flex items-center">
          <h3 className="flex-1">Real Name: {nickname}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="card__icon h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
        <h3>Name: {name}</h3>
        <h3>Birth: {birthday}</h3>
      </div>
    </div>
  );
};

export default CharacterItem;
