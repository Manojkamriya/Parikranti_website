import React, {useEffect} from "react";
import AnimatedNumbers from "react-animated-numbers";

function Animated_Numbers({figure}) {
  const [num, setNum] = React.useState(figure);

  useEffect(() => {
    setNum((state) => figure);
  },[]); 

  return (
    <div >
      <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.5,
        })}
        
        animateToNumber={figure}
        fontStyle={{
          fontSize: '4vh',
          color: "red",
        }}
      />
     
    </div>
  );
}

export default Animated_Numbers;

 
