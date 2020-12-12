import React from "react";
import "./HomeContainer.css";

interface ContainerProps {
  name: string;
}

const HomeContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container home-container">
      <header>
        <h2>Travel App</h2>
      </header>

      <div className="cover">
        <h1>Discover what's out there.</h1>
        <form className="flex-form">
          <input type="search" placeholder="Where do you want to go?" />
          <input type="submit" value="Search" />
        </form>
        <div id="madeby">
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@benblenner">
              Ben Blennerhassett
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
