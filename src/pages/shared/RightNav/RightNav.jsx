import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>{" "}
      </div>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
