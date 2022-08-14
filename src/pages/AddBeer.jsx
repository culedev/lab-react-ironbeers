import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios"
const AddBeer = () => {
    const navigate = useNavigate()

  const [addNewBeer, setAddNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (event) => {
    const stateCloned = {...addNewBeer}
    stateCloned[event.target.name] = event.target.value
    setAddNewBeer(stateCloned)
    console.log(stateCloned)

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", addNewBeer)
        console.log("Beer Added!")
        navigate("/beers")
        
    } catch (error) {
        navigate("/error")
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" onChange={handleChange}/>
        <br />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={handleChange}/>
        <br />
        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" onChange={handleChange}/>
        <br />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name="brewers_tips" onChange={handleChange}/>
        <br />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="text" name="attenuation_level" onChange={handleChange}/>
        <br />
        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name="contributed_by" onChange={handleChange}/>
        <br />
        <button>ADD NEW</button>
      </form>
    </div>
  );
};

export default AddBeer;
