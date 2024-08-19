import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import project1 from "../assets/images/png/project1.png";
import project2 from "../assets/images/png/project2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectSlider = () => {
  const projectData = [
    {
      title: "Dating App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project1,
    },
    {
      title: "Education App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project2,
    },
    {
      title: "Dating App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project1,
    },
    {
      title: "Education App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project2,
    },
    {
      title: "Dating App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project1,
    },
    {
      title: "Education App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project2,
    },
    {
      title: "Dating App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project1,
    },
    {
      title: "Education App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sociis aenean aliquam elementum eget sit orci. Hac nunc aliquam a suscipit id sodales senectus aliquam non. Fringilla.",
      stack: ["Flutter", "Firebase", "NodeJs", "Dart", "Figma"],
      img: project2,
    },
  ];

  const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    let val = document.querySelector(".slick-current");
    if (val) {
      let value = val.nextElementSibling;
    }

    return (
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ display: "none", color: "white" }}
        size="2x"
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faArrowRight}
        size="2x"
        style={{ display: "none", color: "white", }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projectData.map((item, index) => {
          const { title, img, stack, description } = item;
          return (
           
              <div
                className="card_bg  d-flex flex-column text-white rounded-5 "
                key={index}
              >
                <div className="project_wall  ">
                  <img className="h-100 w-100
                   rounded-5" src={img} alt="" />
                   <h4 className="testing">{item.title}</h4>
                </div>

               
              </div>
           
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
