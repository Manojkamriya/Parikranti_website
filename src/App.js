import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About_Us/About";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Idea from "./Pages/Idea/Idea_S";
import Index from "./Pages/Index_Page/Index_Page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Donation from "./Pages/Donation/App";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar /> <Home />
          <Footer/>
        </>
      ),
    },
    {
      path: "/getInvolved",
      element: (
        <>
          {" "}
          <Navbar />
          <GetInvolved />
          <Footer/>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer/>
        </>
      ),
    },
    {
      path: "/idea",
      element: (
        <>
          <Navbar />
          <Idea />
          <Footer/>
        </>
      ),
    },
    {
      path: "/donation",
      element: (
        <>
          <Navbar />
          <Donation/>
          <Footer/>
        </>
      ),
    },
  ]);
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
