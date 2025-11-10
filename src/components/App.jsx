// import Navbar from "./Navbar";
// import Home from "./home/Home";
// import About from "./aboutUs/About";
// import GetInvolved from "./getInvolved/GetInvolved";
// import Idea from "./ideaStrategy/IdeaStrategy";
// import Index from "./indexPage/IndexPage";
// import Login from "./login/loginPage";
// import Donation from "./donation/Donation";
// import WhatsAppIcon from "./WhatsAppIcon";
// import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
// import TermsOfUse from "./termsOfUse/TermsOfUse";
// // import PopUpForm from "./PopUpForm";
// import Footer from "./Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
// 				<div>
// 					<Navbar />
// 					<Routes>
// 						<Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
// 						<Route path="/getInvolved" element={<GetInvolved/>} />
//             <Route path="/idea" element={<Idea />} />
//             <Route path="/donation" element={<Donation />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/terms" element={<TermsOfUse />} />
//             <Route path="/policy" element={<PrivacyPolicy />} />
//             <Route path="/index" element={<Index />} />
					
// 					</Routes>
// 		<WhatsAppIcon/>
//    <Footer/>
// 				</div>
// 			</BrowserRouter>
//     </>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./aboutUs/About";
import GetInvolved from "./getInvolved/GetInvolved";
import Idea from "./ideaStrategy/IdeaStrategy";
import Index from "./indexPage/IndexPage";
import Login from "./login/loginPage";
import Donation from "./donation/Donation";
import WhatsAppIcon from "./WhatsAppIcon";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TermsOfUse from "./termsOfUse/TermsOfUse";
import Footer from "./Footer";
import { AnimatePresence } from 'framer-motion';
import PageTransition from "./PageTransition";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import './App.css'; // Import CSS for transitions

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
     
      <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/getInvolved" element={<PageTransition><GetInvolved /></PageTransition>} />
            <Route path="/idea" element={<PageTransition><Idea /></PageTransition>} />
            <Route path="/donation" element={<PageTransition><Donation /></PageTransition>} />
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><TermsOfUse /></PageTransition>} />
            <Route path="/policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/index" element={<PageTransition><Index /></PageTransition>} />
          </Routes>
      </AnimatePresence>
      <WhatsAppIcon />
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
