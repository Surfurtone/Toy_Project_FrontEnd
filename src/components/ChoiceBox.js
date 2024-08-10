const ChoiceBox = ({ img, characterName, characterAge, content }) => {
  return (
    <div
      className="relative rounded-lg h-56 flex flex-col justify-end text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-1 left-0 rounded-lg bg-gradient-to-b from-transparent to-black h-56 w-full z-0"></div>
      <div className="flex z-10 px-4 items-baseline">
        <p className="text-lg font-semibold pr-2">{characterName}</p>
        <p className="text-xs">{characterAge}</p>
      </div>
      <div className="px-4 pb-4 text-xl font-semibold z-10">"{content}"</div>
    </div>
  );
};

export default ChoiceBox;
