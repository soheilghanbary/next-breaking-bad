import { useAllCharacters } from "hooks";
import { FC } from "react";
import CharacterItem from "./item";

const CharacterList: FC = () => {
  const { data, isLoading } = useAllCharacters();

  const skeletons = () =>
    [1, 2, 3, 4, 5, 6, 7, 8,9,10].map((_) => (
      <div key={_} className="animate-pulse h-80 bg-slate-300 rounded-md" />
    ));

  return (
    <ul className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
      {isLoading ? skeletons() : data?.map((character) => (
        <CharacterItem key={character.char_id} {...character} />
      ))}
    </ul>
  );
};
export default CharacterList;
