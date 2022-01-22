import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
// import PropCategory from "../../components/PropCategory";
// import WhatWeOffer from "../../components/WhatWeOffer";
import houseImage from "../../assets/images/slide1.jpg";
import heroImage from "../../assets/images/slide3.jpg";
// import image1 from "../../assets/images/image 4.png";
// import image2 from "../../assets/images/image 7.png";
// import image4 from "../../assets/images/image-.png";
import { PropertyListings } from "../../components/carousel/carousel.component";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";
import NavComponent from "../../components/nav/nav.component";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import mobileAppImage from "../../assets/images/villakrib_app_phone.png";
import FooterComponent from "../../components/footer/footer.component";
// import { minPrices, maxPrices } from "../../assets/json/pricessets/json/prices";
import searchData from "../../assets/json/searchData";

const HomePage = () => {
  const [searchDataState] = useState(searchData);
  const { minPrices, maxPrices, type } = searchDataState;
  console.log("minPrices -->", minPrices);
  console.log("maxPrices -->", maxPrices);
  console.log("type -->", type);

  return (
    <>
      <div className="top-nav">
        <NavComponent />
      </div>
      {/*<ReactCarousel /> */}
      <section className="hero-section">
        <div className="hearo-div">
          <img src={heroImage} className="w-100" alt="" />
          <div className="hero-text-over-image">
            Easy Buy, Easy Life
            <p>Down to dusk, home is best</p>
          </div>
          {/* <div className="search-div-over-image">
            <div className="form-div">
              <div className="input-div">
                <input type="text" />
              </div>
            </div>
          </div> */}
        </div>
        {/* new search section
        responsive with bootstrap grid system
        */}
        <section className="search-section">
          <h1 className="text-center text-white">Search Your Next Home</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="test"
                />
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                </select>
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                </select>
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                </select>
              </div>
              <div className="col-md-2 col-sm-2 ">
                <button className="btn btn-primary fancy-button r">
                  {" "}
                  Search...
                </button>
              </div>
              {/* <div className="col-md-3">hi</div> */}
            </div>
          </div>
        </section>
      </section>

      {/*Search Area*/}
      {/* <div className="search">
        <div className="firstHeader">
          <h1>Search Your Next Home</h1>
        </div>
        <div className="searchArea">
          <div className="buttons">
            <button>Buy</button>
            <button>Sell</button>
            <button>Rent</button>
          </div>

          <div className="keyInputs">
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="Location of Search...." />
              </div>

              <div className="type">
                <select>
                  <option value="" disabled selected hidden>
                    Type
                  </option>
                  <optgroup label="Rent">
                    <option>Self contain</option>
                    <option>1 bed room</option>
                    <option>2 bed room</option>
                    <option>3 bed room</option>
                    <option>Appartment</option>
                    <option>Store</option>
                    <option>Warehouse</option>
                    <option>Bungalow</option>
                    <option>Duplex</option>
                  </optgroup>
                  <optgroup label="Buy">
                    <option>Duplex</option>
                    <option>Bungalow</option>
                    <option>House</option>
                    <option>Land</option>
                    <option>Estate</option>
                    <option>Store</option>
                    <option>Warehouse</option>
                  </optgroup>
                  <optgroup label="Sell">
                    <option>Duplex</option>
                    <option>Bungalow</option>
                    <option>House</option>
                    <option>Land</option>
                    <option>Estate</option>
                    <option>Store</option>
                    <option>Warehouse</option>
                  </optgroup>
                  <optgroup label="Invest">
                    <option>Land</option>
                    <option>Property</option>
                    <option>Housing</option>
                  </optgroup>
                </select>
              </div>
              <div className="minPrice">
                <select name="" id="">
                  <option value="" disabled selected hidden>
                    Min Price
                  </option>
                  {minPrices.map((price, index) => {
                    return <option key={index}>{price}</option>;
                  })}
                </select>
              </div>

              <div className="maxPrice">
                <select name="" id="">
                  <option value="" disabled selected hidden>
                    Max Price
                  </option>
                  {maxPrices.map((price, index) => {
                    return <option key={index}>{price}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="searchButton">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* let us walk you home  section */}
      <div className="container walk-home-section">
        <div className="row image-row-house">
          <div className="col-md-6 image-col-house">
            <div className="right-image-house">
              <img src={houseImage} alt="" />
            </div>
          </div>
          <div className="col-md-6  d-flex text-col-house">
            <div className="my-auto">
              <hr className="hr" />
              <h1 className="header-text">Let us walk you home.</h1>
              Exquisit property listing for buyers, large Clientele for sellers,
              location database and price ranging for renting. Availability of
              agents and movers, with a easy means to contact them. Digital
              imagery library to enjoy shopping with us and an advisory team for
              investors. Villakrib brings ease with smiles, making your walk
              home exciting.
              <br />
              <Link to="" className="btn btn-primary fancy-button r">
                Learn More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="explor-section">
        {/* <div className=" PropertyListingsDiv">
          <div className="PropertyListings"> */}
        <PropertyListings />
        {/* </div>
        </div> */}
      </section>
      {/* <WhatWeOffer /> */}
      <div className="ourFeaturedAgents">
        <hr className="hr" />

        <h1 className="header-text">Our Featured Agents</h1>
      </div>
      <div className="featuredAgent">
        <FeaturedAgent
          image={Agent1}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
        <FeaturedAgent
          image={Agent2}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
        <FeaturedAgent
          image={Agent3}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
      </div>
      <section className="blog-section">
        <div className="image-behaind-text-div">
          <img src={houseImage} alt="" />
          <div className="text-over-image">
            <div className="header">Lorem ipsum dolor sit amet</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            reprehenderit dignissimos velit maxime iste adipisci non assumenda
            autem, optio quis rerum dolorum sint dolor excepturi quaerat
            obcaecati voluptatibus culpa in.
            <p>
              <button className="btn btn-primary mt-3 fancy-button l float-end">
                Read Blog...
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="question-section d-flex">
        <div className="row p-3 my-auto w-100 ">
          {" "}
          <div className="col-md-8 ">
            <h1 className="header-text">Do you Have A Question?</h1>
            We are always avalilabie to answer
          </div>
          <div className="col-4 button-col d-flex">
            <div className="btn btn-primary my-auto fancy-button">
              Contact Us
            </div>
          </div>
        </div>
      </section>
      {/* <section className="download-app-section">
        <div className="d-flex">
          <div className="download-text">
            <h1 className="header-text">Download our App is free</h1>
            <div className="store-icons d-flex">
              <img src={appstore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="download-app-image">
            <img src={mobileAppImage} alt="" />
          </div>
        </div>
      </section> */}
      <section className="download-app-section">
        <div className="conta iner">
          <div className="row">
            <div className="col-md-6 download-text">
              <h1 className="header-text">Download our App is free</h1>
              <div className="store-icons d-flex">
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
            <div className="col-md-6 download-app-image">
              <img src={mobileAppImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerComponent">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
