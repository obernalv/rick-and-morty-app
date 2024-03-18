import { useEffect, useState } from "react";
import "./App.css";
import useHttp from "./hooks/useHttp";
import FormSearch from "./components/FormSearch";
import getRandomNumber from "./services/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import HasError from "./components/HasError";

function App() {
  const randomLocation = getRandomNumber(126);
  const [locationSelected, setLocationSelected] = useState(randomLocation);

  const url = `https://rickandmortyapi.com/api/location/${
    locationSelected || getRandomNumber(126)
  }`;
  const [location, getLocation, hasError] = useHttp(url);

  useEffect(() => {
    getLocation();
  }, [locationSelected]);

  return (
    <div className="app">

      <img className="banner" src="/images/banner_rm2.jpg" alt="" />

      <FormSearch setLocationSelected={setLocationSelected} />

      {hasError ? (
        <HasError />
      ) : (
        <>
          <LocationInfo location={location} />

          <div className="container-resident">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
