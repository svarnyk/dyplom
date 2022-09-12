import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  UserProfilePage,
  NotFoundPage,
  UserNotFoundPage
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
          <Route path="/profile/:id" element={<UserProfilePage/>} />
          <Route path="/profile/*" element={<UserNotFoundPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
