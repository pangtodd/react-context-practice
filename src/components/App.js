import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContex, themes } from "../context/theme-context";

function App(){

  const [theme, setTheme]= useState(themes.light);

  return (
    <ThemeContex.Provider value={theme}>
      <Header />
      <ToggleTheme />
      <TicketControl />
    </ThemeContex.Provider>
  );
}

export default App;