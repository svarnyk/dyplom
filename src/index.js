import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app"
import reportWebVitals from "./reportWebVitals"
import StyleLoader from "./styleLoader"
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";

const app = createRoot(document.getElementById("root"))

app.render(
  <React.StrictMode>
    {/*<StyleLoader />*/}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
