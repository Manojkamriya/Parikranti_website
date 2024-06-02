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
import PopUpForm from "./PopUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
				<div>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
						<Route path="/getInvolved" element={<GetInvolved/>} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/index" element={<Index />} />
					
					</Routes>
		<WhatsAppIcon/>
    {/* <PopUpForm/> */}
   
				</div>
			</BrowserRouter>
    </>
  );
}

export default App;