import withCounter from "./HOC/withCOunter";

const HoverCounter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { count, increment } = props;
  return (
    <div>
      <h1 type="button" onMouseOver={increment}>
        Hovered {count} times
      </h1>
    </div>
  );
};

export default withCounter(HoverCounter);
