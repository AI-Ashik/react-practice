const EventProps = () => {
  const handleWelcome = (ashik) => {
    alert(`Hello ${ashik}`);
  };
  const handleHover = () => {
    console.log("Hover");
  };
  return (
    <>
      <WelcomeUser
        onButtonClick={() => handleWelcome("Ashik")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  return (
    <div>
      <button
        onClick={props.onButtonClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
      >
        Alert
      </button>
      <button
        onMouseEnter={props.onMouseEnter}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Hover
      </button>
    </div>
  );
};

export { WelcomeUser };
export default EventProps;
