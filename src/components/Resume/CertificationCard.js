import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineLink } from "react-icons/ai";

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ color: "#c770f0 !important" }}>
          {props.issuer}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
          {props.description}
        </Card.Text>
        {props.certificateLink && (
          <Button variant="primary" href={props.certificateLink} target="_blank">
            <AiOutlineLink /> &nbsp;
            {"View Certificate"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
