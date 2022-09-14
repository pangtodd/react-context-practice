import React from "react";
import PropTypes from "prop-types";
import { themes } from "../context/theme-context";

function ToggleTheme(props) {
  const { toggleTheme } = props;

  const styles ={
    backgroundColor: themes.buttonBackground,
    color: themes.textColor,
  }

  return (
    <React.Fragment>
      <button style={styles} onClick={toggleTheme}>
        {themes.textColor === "AntiqueWhite"? "toggle light theme": "toggle dark theme"}
        Toggle Theme
      </button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object,
}

export default ToggleTheme;