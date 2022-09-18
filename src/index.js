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
      <PersistGate persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
