type Props = {
  readonly picture: string;
  readonly name: string;
  readonly season: string;
  readonly episode: string;
  readonly quotation: string;
};

function Card({ picture, name, season, episode, quotation }: Props) {
  return (
    <div className="flex flex-col items-center m-auto w-3/5 md:max-w-lg p-5 shadow-[0_0_10px_0_#faebd7] rounded-lg">
      <img
        src={`${picture}`}
        alt={`${name}`}
        className="w-[200px] rounded-lg"
      />
      <h2 className="m-3 text-3xl">{`${name}`}</h2>
      <p className="text-lg">{`${season}`}</p>
      <p className="mb-5 text-lg leading-4">{`Episode: ${episode}`}</p>
      <p className="text-xl text-center">{`« ${quotation} »`}</p>
    </div>
  );
}

export default Card;
