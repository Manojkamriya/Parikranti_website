import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import Animated_Numbers from "./Animated_Numbers";

const FigureCard = ({ figure, heading }) => {
  return (
    <>
      <Card className="my-2" color="rgb(192,192,192)" outline style={{boxShadow : ' 0 0 80px rgba(0, 0, 0, 0.1)' , margin : '0.5vw'}}>
        <CardHeader
          tag="h5"
          style={{ textAlign: "center" }}
        >
          {heading}
        </CardHeader>
        <CardBody>
          <CardTitle style={{alignContent : 'center'}}>
            <Animated_Numbers figure={figure} />
          </CardTitle>
        </CardBody>
      </Card>
      <Card />
    </>
  );
};

export default FigureCard;
