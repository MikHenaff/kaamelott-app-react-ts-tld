function CallAPIButton(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="block m-auto mb-10 p-2  text-black bg-[#faebd7] rounded-lg hover:scale-105"
    >
      Voir une citation
    </button>
  );
}

export default CallAPIButton;
