import PropTypes from "prop-types";

export const NetflixSeriesCards = ({ series }) => {
  const { name, rating, cast, genre, watch_url, img_url } = series;
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={img_url} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">Rating: {rating}</p>
        <p className="text-gray-600 mb-4">Cast: {cast}</p>
        <p className="text-gray-600 mb-4">Genre: {genre}</p>
        <a
          href={watch_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Watch Now
        </a>
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
