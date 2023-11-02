import React from "react";
import Card from "react-bootstrap/Card";

function CustomCard(props) {
  return (
    <div className="container" style={{ minWidth: "50%" }}>
      <div className="container" style={{ minWidth: "95%" }}>
        <div className="row">
          <div className="col-12">
            <Card
              style={{ boxShadow: "0px 1px 2px 1px rgba(152, 152, 152, 0.2)" }}
            >
              <Card.Body style={{ margin: "10px" }}>{props.children}</Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
