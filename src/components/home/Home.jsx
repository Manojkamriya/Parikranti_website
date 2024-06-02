
import Carousel from "./Carousel";
import Media from "./data";
import Goal from './Goal';

// import '../../components/Modal.css';
import Suggestion from "./Suggestion";
import Modal from "./Modal";
import './home.css';

function Home() {
  return (
    <div>
      <Carousel images={Media} />
      <Modal/>
      <h1 id="goal">Our Goals</h1>
    
      <Goal/>
  
      <Suggestion/>
    </div>
  );
}

export default Home;
