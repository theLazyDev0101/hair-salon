import React from "react";
import Dashboard from "./Components/Pages/Dashboard";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact"
import Team from "./Components/Pages/Team"
import Service from "./Components/Pages/Service"
import Price from "./Components/Pages/Price"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Dashboard />,
    },
    {
      path : '/about',
      element : <About />,
    },
    {
      path : '/contact',
      element : <Contact />,
    },
    {
      path : '/price',
      element : <Price />,
    },
    {
      path : '/service',
      element : <Service />,
    },
    {
      path : '/team',
      element : <Team />,
    },
  ]);
  return (
    <RouterProvider router={router} />    
  )

}

export default App;
