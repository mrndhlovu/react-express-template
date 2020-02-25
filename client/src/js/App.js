import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import "../App.css";
import BaseRouter from "./Routes";
import store from "./store";

const AppContainer = styled.div`
  top: 0;
  left: 0;
`;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <BaseRouter />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
