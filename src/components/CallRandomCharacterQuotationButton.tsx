function CallRandomCharacterQuotationButton(props: {
  onClick: () => void;
  name: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className="block m-auto mt-10 p-2  text-black bg-[#faebd7] rounded-lg hover:scale-105"
    >
      {props.name.charAt(0) === "L" &&
      props.name.charAt(1) === "e" &&
      props.name.charAt(2) === "s"
        ? `Voir une autre citation des ${props.name.slice(3)}`
        : props.name.charAt(0) === "L" &&
          props.name.charAt(1) === "e" &&
          props.name.charAt(2) === " "
        ? `Voir une autre citation du ${props.name.slice(2)}`
        : props.name.charAt(0) === "A" ||
          props.name.charAt(0) === "E" ||
          props.name.charAt(0) === "I" ||
          props.name.charAt(0) === "O" ||
          props.name.charAt(0) === "U" ||
          props.name.charAt(0) === "Y"
        ? `Voir une autre citation d'${props.name}`
        : `Voir une autre citation de ${props.name}`}
    </button>
  );
}

export default CallRandomCharacterQuotationButton;
