import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizaton from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: customizaton,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
