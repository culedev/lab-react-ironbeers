import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import RandomImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";

const Home = () => {
  const divStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={divStyle}>
      <div style={{ width: "30%" }}>
        <Link
          to={"/beers"}
          style={{ textDecoration: "none", color: "black", textAlign: "left" }}
        >
          <img src={BeersImg} alt="beers-list" width={"100%"} />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis repudiandae minus animi, ea asperiores iste sint? Illo
            expedita impedit sit, mollitia animi in, reiciendis commodi placeat
            tempora, excepturi eos recusandae.
          </p>
        </Link>
        <hr />
      </div>
      <div style={{ width: "30%" }}>
        <Link
          to={"/random-beer"}
          style={{ textDecoration: "none", color: "black", textAlign: "left" }}
        >
          <img src={RandomImg} alt="beers-list" width={"100%"} />
          <h2>Random Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis repudiandae minus animi, ea asperiores iste sint? Illo
            expedita impedit sit, mollitia animi in, reiciendis commodi placeat
            tempora, excepturi eos recusandae.
          </p>
        </Link>
        <hr />
      </div>
      <div style={{ width: "30%" }}>
        <Link
          to={"/new-beer"}
          style={{ textDecoration: "none", color: "black", textAlign: "left" }}
        >
          <img src={NewBeerImg} alt="beers-list" width={"100%"} />
          <h2>New Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis repudiandae minus animi, ea asperiores iste sint? Illo
            expedita impedit sit, mollitia animi in, reiciendis commodi placeat
            tempora, excepturi eos recusandae.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
