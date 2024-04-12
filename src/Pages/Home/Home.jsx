
import Carousel from "./Carousel";
import media from "./Data";
import Goal from './Goal';
import Suggestion from "./Suggestion";
import Modal from "./Modal";
import './home.css';

function Home() {
  return (
    <div>
      <Carousel images={media} />
      <Modal/>
      <h1 id="goal">Our Goals</h1>
    
      <Goal/>
      <Suggestion/>
    </div>
  );
}

export default Home;
