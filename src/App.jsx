import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/aboutUs/About";
import GetInvolved from "./components/getInvolved/GetInvolved";
import Idea from "./components/ideaStrategy/IdeaStrategy";
import Index from "./components/indexPage/IndexPage";
import Login from "./components/login/loginPage";
import Donation from "./components/donation/Donation";
import WhatsAppIcon from "./components/WhatsAppIcon";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TermsOfUse from "./components/termsOfUse/TermsOfUse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/index",
      element:<> <Index /> <WhatsAppIcon/></>,
    },
    {
      path: "/",
      element:
        <>
          <Navbar /> <Home /><WhatsAppIcon/>
        </>
      
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
      element: 
        <>
          <Navbar /> <Donation /><WhatsAppIcon/>
        </>
     
    },
    {
      path: "/about",
      element: 
        <>
          <Navbar />
          <About /><WhatsAppIcon/>
        </>
     
    },
    {
      path: "/login",
      element: 
        <>   <Navbar />
         <Login />
        </>
    
    },
    {
      path: "/idea",
      element: 
        <>
          <Navbar />
          <Idea /><WhatsAppIcon/>
        </>
     
    },
    {
      path: "/terms",
      element: 
        <>
          <Navbar />
         <TermsOfUse/>
        </>
     
    },
    {
      path: "/policy",
      element: 
        <>
          <Navbar />
          <PrivacyPolicy/>
        </>
     
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
