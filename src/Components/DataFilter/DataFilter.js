import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { loadData, filterByValue } from "../../Redux/filter/filterSlice";
import { useEffect } from "react";

export const DataFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData({ count: 6 }));
  }, []);

  const products = useSelector((state) => state.items.filteredProducts);

  const filterByInput = (e) => {
    let input = e.target.value;
    dispatch(filterByValue({ value: input }));
  };

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
                <option value="" defaultValue disabled>
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
            <input
              onChange={filterByInput}
              type="text"
              placeholder="Filter By"
            />
          </div>
          {/* <button onClick={handleData}>Click</button> */}
        </div>
      </section>
      <section className="section">
        <div className="data-container">
          {products &&
            products.length &&
            products.map((product, index) => {
              return (
                <div className="data-conatiner-wrapper" key={index}>
                  <div className="data-container-child">
                    <p>
                      <b>Name:</b>
                      {product.name}
                    </p>
                    <p>
                      <b>Designer:</b>
                      {product.designer}
                    </p>
                    <p>
                      <b>Type:</b>
                      {product.type}
                    </p>
                    <p>
                      <b>Price:</b>
                      {product.price}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};
