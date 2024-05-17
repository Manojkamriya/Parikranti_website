import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Idea from "./Pages/Idea/Idea_S";
import Index from "./Pages/Index_Page/Index_Page";
import Login from "./Pages/Login/login_page";
import Donation from "./Pages/Donation/Donation_page";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/index",
      element:<> <Index /> <WhatsAppIcon/></>,
    },
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home /><WhatsAppIcon/>
        </>
      ),
    },
    {
      path: "/getInvolved",
      element: (
        <>
          {" "}
          <Navbar />
          <GetInvolved /><WhatsAppIcon/>
        </>
      ),
    },
    
    {
      path: "/donation",
      element: (
        <>
          <Navbar /> <Donation /><WhatsAppIcon/>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About /><WhatsAppIcon/>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
         <Login />
        </>
      ),
    },
    {
      path: "/idea",
      element: (
        <>
          <Navbar />
          <Idea /><WhatsAppIcon/>
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
