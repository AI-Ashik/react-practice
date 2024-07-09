import PropTypes from "prop-types";

const ProfileCardChallange = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Profile Card Challenge</h2>
      <ProfileCard
        name="Alice"
        age={21}
        greetings={
          <div>
            <strong className="text-lg">Hi Alice, It`s a wonderful day</strong>
          </div>
        }
      >
        <p className="mb-2">Hobbies: Reading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click
        </button>
      </ProfileCard>
    </>
  );
};

export default ProfileCardChallange;

function ProfileCard({ name, age, greetings, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Name: {name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-800">{greetings}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  greetings: PropTypes.element.isRequired,
  children: PropTypes.node,
};
