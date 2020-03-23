import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeProvider } from "styled-components";

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

import Container from "./Container";
import Card from "./Card";


const App = () => {

  const [isDarkMode, setIsDarkMode]= useState(() => false);

  return (

    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Card>
          Dark Mode: {isDarkMode ? "Enabled" : "Disabled"}
          <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                
          />
        </Card>
      </Container>
    </ThemeProvider>
  );
  
};

export default App;