import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayOut from "./Components/LayOut/LayOut";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Error from "./Components/Error/Error";
function App() {
const x=  createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "Portfolio",
          element: <Portfolio />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <>
  <RouterProvider router={x}/>
  </>;
}

export default App;
