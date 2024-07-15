import PropTypes from "prop-types";

export const NetflixSeriesCards = ({ series }) => {
  const { name, rating, cast, genre, watch_url, img_url } = series;

  const conditionalStyling = rating >= 8.5 ? "bg-green-500" : "bg-yellow-400";
  const conditionalBtnStyling =
    rating >= 8.5 ? "bg-green-500" : "bg-yellow-400";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={img_url} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">
          Rating:{" "}
          <span
            className={`px-3 py-0.5 text-gray-900  rounded-full focus:ring-gray-500 ${conditionalStyling}`}
          >
            {rating}
          </span>
        </p>
        <p className="text-gray-600 mb-4">Cast: {cast}</p>
        <p className="text-gray-600 mb-4">Genre: {genre}</p>
        <button
          className={`inline-block hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded transition-all ${conditionalBtnStyling}`}
        >
          <a href={watch_url} target="_blank" rel="noopener noreferrer">
            Watch Now
          </a>
        </button>
      </div>
    </div>
  );
};

NetflixSeriesCards.propTypes = {
  series: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    cast: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    watch_url: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  }).isRequired,
};
