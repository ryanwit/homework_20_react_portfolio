import React from "react";
// import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
          <div className="card-body">
              <h5 className="card-title"> {props.name} </h5>
              <p className="card-text"> {props.description} </p>
            </div>
            <div className="card-body">
              <a href={props.deployedLink} target="_blank"  className="card-link">Deployed Link</a>
              <a href={props.repoLink} target="_blank" className="card-link ">Repo Link</a>
            </div>
      </div>
  );
}

export default PortfolioCard;

