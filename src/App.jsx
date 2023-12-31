import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "about",
    element: <About />
  }
]);



function App() {

  return (
    <RouterProvider router={router} />
  )

}

export default App
