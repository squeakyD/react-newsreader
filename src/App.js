import React from 'react';
import './App.css';
import NewsViewer from './components/NewsViewer';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NewsViewer />
    </Provider>
  );
}

export default App;
