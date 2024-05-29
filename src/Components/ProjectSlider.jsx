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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
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
        size="4x"
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faArrowRight}
        size="4x"
        style={{ display: "none", color: "white" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <Slider {...settings}>
        {projectData.map((item, index) => {
          const { title, img, stack, description } = item;
          return (
            <div className="text-white px-3  " key={index}>
              <div className="card_bg  d-flex flex-column  rounded-3 ">
                <div className="">
                  <img className="w-100 rounded-top-3" src={img} alt="" />
                </div>
                <div className="px-2 px-sm-4 py-2 py-sm-4">
                  <h5 className="">{title}</h5>
                  <p>{description}</p>
                  <p className="mb-2">Stack Details</p>
                  <div className="d-flex gap-2 flex-wrap">
                    {stack.map((data, i) => (
                      <p className="mb-0 mb-md-3" key={i}>{data}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
