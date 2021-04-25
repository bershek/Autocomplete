import React from "react";
import "./App.css";
import { client } from "./apolloClient/client";
import { ApolloProvider } from '@apollo/react-hooks';
import MainPage from "./components/view/MainPage/MainPage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );
}

export default App;
