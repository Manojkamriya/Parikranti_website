import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About_Us/About";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Idea from "./Pages/Idea/Idea_S";
import Index from "./Pages/Index_Page/Index_Page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/idea",
      element: (
        <>
          <Navbar />
          <Idea />
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
