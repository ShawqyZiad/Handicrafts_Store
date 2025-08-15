import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240323181431/hanging-colorful-eid-festival-lamps-beautiful-background_1017-24849.jpg"
            alt=""
          />
          <button>
            <Link to="/products/sale" className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240323181623/seamless-hand-drawn-mandala-pattern-vintage-elements-orienta_173207-1940-compressed.jpg"
            alt=""
          />
          <button>
            <Link to="/products/text" className="link">
              TEXTILES
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240323181726/christmas-background-with-candle-theme_52683-31153.jpg"
            alt=""
          />
          <button>
            <Link to="/products/new" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240323182037/hobby-crafts-isometric-with-woman-painting-cup-3d_1284-27899-compressed.jpg"
                alt=""
              />
              <button>
                <Link to="/products/diy" className="link">
                  DIY
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240323182202/vintage-flowers-illustration-design_53876-17304.jpg"
                alt=""
              />
              <button>
                <Link to="/products/acc" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240323181914/flat-akshaya-tritiya-illustration_23-2149352957-compressed.jpg"
            alt=""
          />
          <button>
            <Link to="/products/handi" className="link">
              Handicrafts
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;