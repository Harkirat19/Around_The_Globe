import { Link } from "react-router-dom";
import { useCountries } from "../contexts/CountryContext";
import PropTypes from "prop-types";

CountryCard.propTypes = {
  index: PropTypes.number,
};

function CountryCard({ index }) {
  const { countryData } = useCountries();
  if (!countryData || !countryData[index]) return <p>Loading...</p>;
  const country = countryData[index];

  return (
    <Link to={{ pathname: `/${country.name.common.toLowerCase()}` }}>
      <div className="dark:text-white text-vd_blue w-[327px] lg:w-[264px] lg:h-[336px] h-[416px] bg-white dark:bg-dark_blue dark:shadow-sm shadow-md rounded-md mb-12 cursor-pointer hover:scale-105 duration-300">
        <div className="flag">
          {countryData === null ? (
            <p>Loading...</p>
          ) : (
            <img
              src={country.flags.png}
              className="w-full h-[200px] lg:h-[160px] rounded-t-md"
              alt=""
            />
          )}
        </div>
        <div className="pry-info p-8 lg:p-6">
          <div className="country-name text-xl font-bold mb-4">
            {country.name.common}
          </div>
          <p className="font-medium lg:text-sm lg:leading-6 leading-7">
            Population:{" "}
            <span className="font-normal">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="font-medium lg:text-sm lg:leading-6 leading-7">
            Region: <span className="font-normal">{country.region}</span>
          </p>
          <p className="font-medium lg:text-sm lg:leading-6 leading-7">
            Capital: <span className="font-normal">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
