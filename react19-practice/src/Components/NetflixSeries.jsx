import seriesData from "../api/seriesData";
import { NetflixSeriesCards } from "./NetflixSeriesCards";

const NetflixSeries = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-5">
        {seriesData.map((series) => (
          <NetflixSeriesCards key={series.id} series={series} />
        ))}
      </div>
    </>
  );
};

export default NetflixSeries;
