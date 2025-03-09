import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
// Chakra imports
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <Route path={`/live-status`} component={AdminLayout} />
      <Redirect from={`/`} to="/live-status" />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
