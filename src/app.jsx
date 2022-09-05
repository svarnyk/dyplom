import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  UserProfilePage,
  NotFoundPage
} from "./pages";


/**
 * @see https://reactrouter.com/docs
 * компонент роутінгу описує як обробляти різни запити
 * "*" означає будь який шлях, він оброблюється останнім і обробить будь який запит, якщо
 * у попередніх маршрутів не було збігів.
 */

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfilePage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
