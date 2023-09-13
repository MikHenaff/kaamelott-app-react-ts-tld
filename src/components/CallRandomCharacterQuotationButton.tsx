function CallRandomCharacterQuotationButton(props: {
  onClick: () => void;
  name: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className="block m-auto mt-10 p-2  text-black bg-[#faebd7] rounded-lg hover:scale-105"
    >
      Voir une autre citation de {props.name}
    </button>
  );
}

export default CallRandomCharacterQuotationButton;
