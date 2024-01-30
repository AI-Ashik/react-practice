import withCounter from "./HOC/withCOunter";

const ClickCounter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { count, increment } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
