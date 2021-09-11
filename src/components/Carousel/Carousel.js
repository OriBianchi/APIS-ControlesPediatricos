/* eslint-disable prettier/prettier */
import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "./bg.jpg";
import image2 from "./bg2.jpg";
import image3 from "./bg3.jpg";

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Somewhere Beyond,
                  United States
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States
                </h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}