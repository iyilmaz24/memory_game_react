import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import About from './pages/About';
import { ChakraProvider } from '@chakra-ui/react';


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
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    
  )

}

export default App
