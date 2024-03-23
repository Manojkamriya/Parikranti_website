
import Carousel from "./Carousel";
import media from "./Data";
import Goal from './Goal';
import Suggestion from "./Suggestion";
import './home.css';

function Home() {
  return (
    <div>
    
      {/* Carousel */}
      <Carousel images={media} />
      <h1 id="goal">Our Goals</h1>
    
      <Goal/>
      <Suggestion/>
    </div>
  );
}

export default Home;
