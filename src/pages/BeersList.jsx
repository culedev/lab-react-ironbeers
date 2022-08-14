import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const BeersList = () => {
  const navigate = useNavigate();
  const eachDiv = {
    display: "flex",
    borderBottom: "1px solid black",
    paddingBottom: "20px",
    marginBottom: "20px",
    justifyContent: "center",
  };

  const eachContent = {
    textAlign: "left",
    marginLeft: "20px",
  };

  const [beers, setBeers] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState(null)


  useEffect(() => {
    getBeersAPI();
  }, []);

  useEffect(() => {
    getQueryBeer()
  }, [search])

  const getBeersAPI = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeers(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error")
    }
  };

  const handleChange =(event) => {     
      setSearch(event.target.value)
  }

  const getQueryBeer = async (event) => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      setBeers(response.data)
    } catch (error) {
      navigate("/error")
    }
  }

  if (isFetching) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={handleChange} />
      </form>
      <h1>Beers List</h1>
      {beers.map((eachBeer) => {
        return (
          <div key={eachBeer._id} style={eachDiv}>
            <Link to={`/beers/${eachBeer._id}`}>
              <img
                src={eachBeer.image_url}
                alt={eachBeer.name}
                width={"100px"}
              />
            </Link>
            <div style={eachContent}>
              <h3>{eachBeer.name}</h3>
              <h4 style={{ color: "gray" }}>{eachBeer.tagline}</h4>
              <h5>Created by: {eachBeer.contributed_by}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeersList;
