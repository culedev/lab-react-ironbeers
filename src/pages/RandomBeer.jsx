import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RandomBeer = () => {
  const navigate = useNavigate();
  const divStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const [randomBeer, setRandomBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <Header />

      <div style={divStyle}>
        <h1>Beer Details</h1>
        <img src={randomBeer.image_url} alt={randomBeer.name} width={"100"} />
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
        <h4>{randomBeer.first_brewed}</h4>
        <h4>Attenuation: {randomBeer.attenuation_level}</h4>
        <p style={{ width: "40%" }}>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
