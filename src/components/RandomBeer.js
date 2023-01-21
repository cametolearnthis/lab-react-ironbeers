import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function RandomBeer () {

    const [detailsFromBeer, setDetailsFromBeer] = useState(null);
    const baseURL = "https://ih-beers-api2.herokuapp.com/beers";
    useEffect(() => {
      axios
        .get(baseURL + "/random")
        .then((response) => {
            setDetailsFromBeer(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);

    const renderDetails = () => {
        return (
          <div className="box">
            <img src={detailsFromBeer.image_url} alt="" />
            <h2>{detailsFromBeer.name} </h2>
            <h4>{detailsFromBeer.tagline}</h4>
            <p>First brewed: {detailsFromBeer.first_brewed}</p>
            <p>Attenuation level: {detailsFromBeer.attenuation_level}</p>
            <p>{detailsFromBeer.description}</p>
            <p>{detailsFromBeer.contributed_by}</p>
          </div>
        );
      };
    return (
        <>
        <NavLink to="/">Home</NavLink>
        {detailsFromBeer === null ? "loading beer..." : renderDetails()}
        </>
    )
}
export default RandomBeer;