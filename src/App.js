import React, {useState} from "react";

import Dashboard from "./Components/Pages/Dashboard";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact"
import Team from "./Components/Pages/Team"
import Service from "./Components/Pages/Service"
import Price from "./Components/Pages/Price"
import Login from "./Components/Pages/Login";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [loggedInStatus, setIsLoggedIn] = useState(false)
  const [loggedInName, setLoggedInName] = useState('')

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Dashboard loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/about',
      element : <About loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/contact',
      element : <Contact loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/price',
      element : <Price loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/service',
      element : <Service loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/team',
      element : <Team loggedInName={loggedInName} loggedInStatus={loggedInStatus} />,
    },
    {
      path : '/login',
      element : <Login 
                  loggedInName={loggedInName} 
                  loggedInStatus={loggedInStatus} 
                  updateLoggedInStatus={setIsLoggedIn}
                  updateLoggedInName={setLoggedInName} 
                />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  )

}

export default App;
