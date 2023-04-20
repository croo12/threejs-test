import React from "react";
import ThreejsContainer from "./ThreejsContainer";
import PropTypes from "prop-types";

const ResearchHeader = (props) => {
  return (
    <header className="App-header">
      <div className="Welcome-title">
        <h1>{props.title}</h1>
      </div>
      <ThreejsContainer />
    </header>
  );
};

ResearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ResearchHeader;
