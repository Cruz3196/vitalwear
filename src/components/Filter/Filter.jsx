import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import "./Filter.css";


const Filter = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandsData] = useState([
    { name: "Slim Fit", count: 20 },
    { name: "Oversized Fit", count: 7 },
    { name: "Regular Fit", count: 10 },
    { name: "Compression it", count: 39 },
    { name: "Muscle Fit", count: 95 },
    { name: "Extreme Oversized Fit", count: 20 },
    { name: "Straight Leg", count: 48 },
  ]);


  const priceRanges = [ 
    "$0 - $10",
    "$10 - $20",
    "$20 - $30",
    "$30 - $50",
    "$50 - $75",
    "$75 - $100",
    "$100 - $125"
  ];

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };


  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };


  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterCategories = [
    "Bottoms & Joggers",
    "T-Shirts & Tops",
    "Hoodies & Jackets",
    "Shorts",
    "Tank Tops",
    "Base Layers",
    "Sweatsuits",
    "Stringers",
    "Underwear & Basics",
  ];

  const filterSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div>
      <div className="filterSection">
        <div className="filterCategories">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Product Categories</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {filterCategories.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterSizes">
          <Accordion disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Sizes</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="sizeButtons">
                {filterSizes.map((size, index) => (
                  <button
                    key={index}
                    className={`sizeButton ${
                      selectedSizes.includes(size) ? "selected" : ""
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterBrands">
          <Accordion disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Fit</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {/* Search bar */}
              <div className="searchBar">
                <BiSearch
                  className="searchIcon"
                  size={20}
                  color={"#767676"}
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Brand list */}
              <div className="brandList">
                {filteredBrands.length > 0 ? (
                  filteredBrands.map((brand, index) => (
                    <div className="brandItem" key={index}>
                      {/* Radio button */}
                      <input
                        type="checkbox"
                        name="brand"
                        id={`brand-${index}`}
                        className="brandRadio"
                      />
                      {/* Brand name */}
                      <label
                        htmlFor={`brand-${index}`}
                        className="brandLabel"
                      >
                        {brand.name}
                      </label>
                      {/* Brand count */}
                      <span className="brandCount">{brand.count}</span>
                    </div>
                  ))
                ) : (
                  <div className="notFoundMessage">Not found</div>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterPrice">
          <Accordion disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Price</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="priceButtons">
                {priceRanges.map((price, index) => (
                  <button
                    key={index}
                    className={`priceButton ${
                      selectedPrice === price ? "selected" : ""
                    }`}
                    onClick={() => handlePriceChange(price)}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Filter;
