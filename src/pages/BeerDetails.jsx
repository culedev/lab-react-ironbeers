import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

const BeerDetails = () => {
  const navigate = useNavigate();
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getBeerDetails();
  });

  const getBeerDetails = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      const filteredBeer = response.data.filter(
        (eachBeer) => eachBeer._id === beerId
      );
      setBeer(filteredBeer[0]);
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
      <h1>Beer Details</h1>
      <img src={beer.image_url} alt={beer.name} width={"200"} />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <h4>{beer.first_brewed}</h4>
      <h4>Attenuation: {beer.attenuation_level}</h4>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
