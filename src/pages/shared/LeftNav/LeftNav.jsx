import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import moment from "moment";

const LeftNav = () => {
  const [categoties, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-4">
      <h4>All Category</h4>
      <div className="ps-4">
        {categoties.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <Row xs={1} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="text-secondary">
                {moment().format(" MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="text-secondary">
                {moment().format(" MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text className="text-secondary">
                {moment().format(" MMMM D, YYYY")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
