import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContex, themes } from "../context/theme-context";

function App(){

  const [theme, setTheme]= useState(themes.light);

  function toggleTheme(){
    setTheme(theme=>
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark  
    );
  }

  return (
    <ThemeContex.Provider value={theme}>
      <Header />
      <ToggleTheme toggleTheme={toggleTheme} />
      <TicketControl />
    </ThemeContex.Provider>
  );
}

export default App;