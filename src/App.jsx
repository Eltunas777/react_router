import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const [user, setUser] =useState(null) //Hooks que mantiene al usuario

  const login = () => {   //Asigna un usuario al Hooks
    //request done
    setUser({
      id: 1,
      name: "John"
    })
  }

  const logout = () => setUser(null)  //Funcion Logout del Usuario


  return (
    <BrowserRouter>
      <Navbar />

      {user ? (
      <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>Goodbye</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
