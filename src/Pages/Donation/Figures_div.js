import react from "react";
import FigureCard from "./FigureCard";
import { CardGroup, Col, Row } from "reactstrap";

const Figures = () => {
  return (
    <>
      <Row>
      <CardGroup> 
        <Col>
          <FigureCard figure="25141" heading = 'No. of Donors'/>
        </Col>
        <Col>
          <FigureCard figure="600000" heading = 'Amount Collected'/>
        </Col>
        <Col>
          <FigureCard figure="12312454" heading = 'Amount Used'/>
        </Col>
        <Col>
          <FigureCard figure="4124255" heading = 'Remaining Amount'/>
        </Col>
        <Col>
          <FigureCard figure="55363" heading = 'Receipts & Balance Sheet'/>
        </Col>
        </CardGroup>
      </Row>
    </>
  );
};

export default Figures;
