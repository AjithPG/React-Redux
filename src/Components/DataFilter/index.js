import React from "react";
import generate from "../../helpers/data";

function index() {
  console.log(generate(4));

  return (
    <div className="App">
      <section className="hero">
        <div className="heor-section">
          <div className="container">
            <h1>Filtering and Pagination with React</h1>
            <h2>A detailed guide</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="controls">
            <div className="select">
              <select>
                <option value="" selected disabled>
                  Sort By
                </option>
                <option>Price - Lowest to Highest</option>
                <option>Price - Highest to Lowest</option>
                <option>Alphabet A-Z</option>
                <option>Alphabet Z-A</option>
              </select>
            </div>
          </div>
          <div className="controls">
            <input type="text" placeholder="Filter By" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="data-container">
          <div className="data-conatiner-wrapper">
            <div className="data-container-child">
              <p>
                <b>Name:John</b>
              </p>
              <p>
                <b>Designer:Greyscale</b>
              </p>
              <p>
                <b>Type:Tool</b>
              </p>
              <p>
                <b>Price:20</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
