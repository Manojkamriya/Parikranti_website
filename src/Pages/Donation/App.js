
import {Button} from 'reactstrap';
import Figures from './Figures_div';
import Navbar from '../../components/Navbar';
import {Card} from 'reactstrap';

const Donation = () => {
  return (
   <>
<Navbar/>

   <img style={{width : '100vw', height : '98vh'}} src="./Images/donation.png" alt="error" />

  <div style={{textAlign : 'center', margin : '2vh'}}>
  
      <Button style={{fontSize : '3vh'}}
    color="danger">
    The Big Heart
  </Button>
  </div>

  <Figures/>
  {/* <Card style={{height : '30vh' , fontWeight : 'bold',fontSize : '3vh'}}>Documents</Card> */}
   </>

  );
}

export default Donation;
