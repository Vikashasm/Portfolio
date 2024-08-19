import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import circle from "../assets/images/png/circle.png";
import person from "../assets/images/png/person.png";
import user from "../assets/images/png/user_laptop.png";
import flutter from "../assets/images/svg/flutter.svg";
import reactjs from "../assets/images/svg/reactjs.svg";
import github from "../assets/images/svg/github.svg";
import nodejs from "../assets/images/svg/nodejs.svg";
import firebase from "../assets/images/svg/firebase.svg";
import lappy_man from "../assets/images/png/lappy_man.png";

import { Link } from "react-router-dom";
import ProjectSlider from "../Components/ProjectSlider";
import { getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const Home = () => {
  const [projects, setProjects]=useState([])
  const [skills, setSkills]=useState([])

 async function fetchProjects() {
        let list = []
        try {
            const querySnapshot = await getDocs(collection(db,'Projects'))
            querySnapshot.forEach((doc) => {
                list.push({id : doc.id , ...doc.data()})
            })
            setProjects(list)    
        } catch (error) {
        }}
 async function fetchSkills() {
        let list = []
        try {
            const querySnapshot = await getDocs(collection(db,'Skills'))
            querySnapshot.forEach((doc) => {
                list.push({id : doc.id , ...doc.data()})
            })
            setSkills(list)     
        } catch (error) {
        }}
  useEffect(()=>{
    fetchProjects();
    fetchSkills();
  },[])
  let data = [
    { title: "Flutter", img: flutter },
    { title: "Flutter", img: firebase },
    { title: "Flutter", img: flutter },
    { title: "Flutter", img: github },
    { title: "Flutter", img: flutter },
    { title: "Flutter", img: reactjs },
    { title: "Flutter", img: flutter },
    { title: "Flutter", img: nodejs },
    { title: "Flutter", img: flutter },
  ];
  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <section>
        <div className="hero  pt-5 ">
          <div className="mt-md-5"></div>
          <div className="background pt-md-5 pt-2 ">
            <div className="container pt-2 pt-lg-5 ">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center  justify-content-between ">
                <div className="w-40 p-2 py-md-5 px-lg-5">
                  <div>
                    <h3 className="fs_full_stack ff_Outfit text-center text-lg-start d-none d-md-block">
                      Full-Stack Mobile App Developer
                    </h3>

                    <h1
                      className="fs_3xl ff_Uncial text-center text-md-start d-none d-md-block"
                      style={{ color: "#720000" }}
                    >
                      Joginder Saini
                    </h1>
                    <p className="text-center fs_lsm   text-md-start">
                      I'm Joginder Saini, a full-stack mobile app developer
                      passionate about crafting seamless digital experiences.
                      Specializing in JavaScript,React, React Native, Node.js,
                      Flutter / Dart and more, I excel in front-end design,
                      back-end development, and database optimization. Let's
                      collaborate to transform ideas into innovative digital
                      solutions that elevate user experiences and drive business
                      success.
                    </p>
                    <a
                      className="text-center text-md-start d-block d-lg-inline"
                      href="https://wa.me/+919992510270"
                    >
                      <button className="bg_btn main_btn fw-bold">
                        Book a Call
                      </button>
                    </a>
                  </div>
                </div>
                <div className="w-40  py-2 px-2 py-md-5 px-lg-5">
                  <h3 className="fs_full_stack ff_Outfit text-center text-lg-start d-md-none">
                    Full-Stack Mobile App Developer
                  </h3>

                  <h1
                    className="fs_3xl ff_Uncial text-center text-lg-start  d-md-none"
                    style={{ color: "#720000" }}
                  >
                    Joginder
                  </h1>
                  <h1
                    className="fs_3xl ff_Uncial text-center text-lg-start mb-5  pb-5 d-md-none"
                    style={{ color: "#720000" }}
                  >
                    Saini
                  </h1>
                  <div className="position-relative d-flex justify-content-center  align-items-center ">
                    <div className="w-100 overflow-hidden">
                      <img className="w-100 circle" src={circle} alt="" />
                    </div>
                    <img className="w-100 person " src={person} alt="" />
                  </div>
                </div>
              </div>
              <div className="d-flex my-5 gap-3 justify-content-center ">
                <div className="hero_icon">
                  <a
                    href="https://www.facebook.com/vikash.boora.507"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="45" height="45" rx="10" fill="#302E36" />
                      <path
                        d="M24.5 24H27L28 20H24.5V18C24.5 16.97 24.5 16 26.5 16H28V12.64C27.674 12.597 26.443 12.5 25.143 12.5C22.428 12.5 20.5 14.157 20.5 17.2V20H17.5V24H20.5V32.5H24.5V24Z"
                        fill="white"
                      />
                    </svg>
                  </a>

                  <a href="">
                    {" "}
                    <svg
                      className="mx-4"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="45" height="45" rx="10" fill="#302E36" />
                      <g clipPath="url(#clip0_4_355)">
                        <path
                          d="M22.5 10.5C19.2435 10.5 18.834 10.515 17.5545 10.572C16.275 10.632 15.4035 10.833 14.64 11.13C13.8388 11.4305 13.1132 11.9031 12.5145 12.5145C11.9031 13.1132 11.4305 13.8388 11.13 14.64C10.833 15.402 10.6305 16.275 10.572 17.55C10.515 18.8325 10.5 19.2405 10.5 22.5015C10.5 25.7595 10.515 26.1675 10.572 27.447C10.632 28.725 10.833 29.5965 11.13 30.36C11.4375 31.149 11.847 31.818 12.5145 32.4855C13.1805 33.153 13.8495 33.564 14.6385 33.87C15.4035 34.167 16.2735 34.3695 17.5515 34.428C18.8325 34.485 19.2405 34.5 22.5 34.5C25.7595 34.5 26.166 34.485 27.447 34.428C28.7235 34.368 29.598 34.167 30.3615 33.87C31.1622 33.5693 31.8872 33.0967 32.4855 32.4855C33.153 31.818 33.5625 31.149 33.87 30.36C34.1655 29.5965 34.368 28.725 34.428 27.447C34.485 26.1675 34.5 25.7595 34.5 22.5C34.5 19.2405 34.485 18.8325 34.428 17.5515C34.368 16.275 34.1655 15.402 33.87 14.64C33.5695 13.8388 33.0969 13.1132 32.4855 12.5145C31.8868 11.9031 31.1612 11.4305 30.36 11.13C29.595 10.833 28.722 10.6305 27.4455 10.572C26.1645 10.515 25.758 10.5 22.497 10.5H22.5ZM21.4245 12.663H22.5015C25.7055 12.663 26.085 12.6735 27.3495 12.732C28.5195 12.7845 29.1555 12.981 29.5785 13.1445C30.138 13.362 30.5385 13.623 30.9585 14.043C31.3785 14.463 31.638 14.862 31.8555 15.423C32.0205 15.8445 32.2155 16.4805 32.268 17.6505C32.3265 18.915 32.3385 19.2945 32.3385 22.497C32.3385 25.6995 32.3265 26.0805 32.268 27.345C32.2155 28.515 32.019 29.1495 31.8555 29.5725C31.6617 30.0929 31.3549 30.5637 30.957 30.951C30.537 31.371 30.138 31.6305 29.577 31.848C29.157 32.013 28.521 32.208 27.3495 32.262C26.085 32.319 25.7055 32.3325 22.5015 32.3325C19.2975 32.3325 18.9165 32.319 17.652 32.262C16.482 32.208 15.8475 32.013 15.4245 31.848C14.9037 31.6549 14.4324 31.3485 14.0445 30.951C13.6459 30.5634 13.3385 30.092 13.1445 29.571C12.981 29.1495 12.7845 28.5135 12.732 27.3435C12.675 26.079 12.663 25.6995 12.663 22.494C12.663 19.2885 12.675 18.912 12.732 17.6475C12.786 16.4775 12.981 15.8415 13.146 15.4185C13.3635 14.859 13.6245 14.4585 14.0445 14.0385C14.4645 13.6185 14.8635 13.359 15.4245 13.1415C15.8475 12.9765 16.482 12.7815 17.652 12.7275C18.759 12.6765 19.188 12.6615 21.4245 12.66V12.663ZM28.9065 14.655C28.7174 14.655 28.5301 14.6922 28.3554 14.7646C28.1807 14.837 28.022 14.943 27.8883 15.0768C27.7545 15.2105 27.6485 15.3692 27.5761 15.5439C27.5037 15.7186 27.4665 15.9059 27.4665 16.095C27.4665 16.2841 27.5037 16.4714 27.5761 16.6461C27.6485 16.8208 27.7545 16.9795 27.8883 17.1132C28.022 17.247 28.1807 17.353 28.3554 17.4254C28.5301 17.4978 28.7174 17.535 28.9065 17.535C29.2884 17.535 29.6547 17.3833 29.9247 17.1132C30.1948 16.8432 30.3465 16.4769 30.3465 16.095C30.3465 15.7131 30.1948 15.3468 29.9247 15.0768C29.6547 14.8067 29.2884 14.655 28.9065 14.655ZM22.5015 16.338C21.6841 16.3252 20.8723 16.4752 20.1135 16.7792C19.3546 17.0832 18.6638 17.5351 18.0812 18.1086C17.4987 18.6822 17.036 19.3659 16.7203 20.1199C16.4045 20.8739 16.2419 21.6833 16.2419 22.5007C16.2419 23.3182 16.4045 24.1276 16.7203 24.8816C17.036 25.6356 17.4987 26.3193 18.0812 26.8929C18.6638 27.4664 19.3546 27.9183 20.1135 28.2223C20.8723 28.5263 21.6841 28.6763 22.5015 28.6635C24.1193 28.6383 25.6623 27.9779 26.7975 26.8249C27.9326 25.6719 28.5689 24.1188 28.5689 22.5007C28.5689 20.8827 27.9326 19.3296 26.7975 18.1766C25.6623 17.0236 24.1193 16.3632 22.5015 16.338ZM22.5015 18.4995C23.0269 18.4995 23.5471 18.603 24.0324 18.804C24.5178 19.0051 24.9588 19.2997 25.3303 19.6712C25.7018 20.0427 25.9964 20.4837 26.1975 20.9691C26.3985 21.4544 26.502 21.9746 26.502 22.5C26.502 23.0254 26.3985 23.5456 26.1975 24.0309C25.9964 24.5163 25.7018 24.9573 25.3303 25.3288C24.9588 25.7003 24.5178 25.9949 24.0324 26.196C23.5471 26.397 23.0269 26.5005 22.5015 26.5005C21.4405 26.5005 20.423 26.079 19.6727 25.3288C18.9225 24.5785 18.501 23.561 18.501 22.5C18.501 21.439 18.9225 20.4215 19.6727 19.6712C20.423 18.921 21.4405 18.4995 22.5015 18.4995Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_355">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(10.5 10.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="45" height="45" rx="10" fill="#302E36" />
                      <g clipPath="url(#clip0_4_358)">
                        <path
                          d="M28.5 13.5C29.2956 13.5 30.0587 13.8161 30.6213 14.3787C31.1839 14.9413 31.5 15.7044 31.5 16.5V28.5C31.5 29.2956 31.1839 30.0587 30.6213 30.6213C30.0587 31.1839 29.2956 31.5 28.5 31.5H16.5C15.7044 31.5 14.9413 31.1839 14.3787 30.6213C13.8161 30.0587 13.5 29.2956 13.5 28.5V16.5C13.5 15.7044 13.8161 14.9413 14.3787 14.3787C14.9413 13.8161 15.7044 13.5 16.5 13.5H28.5ZM28.5 15.5H16.5C16.2348 15.5 15.9804 15.6054 15.7929 15.7929C15.6054 15.9804 15.5 16.2348 15.5 16.5V28.5C15.5 28.7652 15.6054 29.0196 15.7929 29.2071C15.9804 29.3946 16.2348 29.5 16.5 29.5H28.5C28.7652 29.5 29.0196 29.3946 29.2071 29.2071C29.3946 29.0196 29.5 28.7652 29.5 28.5V16.5C29.5 16.2348 29.3946 15.9804 29.2071 15.7929C29.0196 15.6054 28.7652 15.5 28.5 15.5ZM18.5 20.5C18.7449 20.5 18.9813 20.59 19.1644 20.7527C19.3474 20.9155 19.4643 21.1397 19.493 21.383L19.5 21.5V26.5C19.4997 26.7549 19.4021 27 19.2272 27.1854C19.0522 27.3707 18.813 27.4822 18.5586 27.4972C18.3042 27.5121 18.0536 27.4293 17.8582 27.2657C17.6627 27.1021 17.5371 26.8701 17.507 26.617L17.5 26.5V21.5C17.5 21.2348 17.6054 20.9804 17.7929 20.7929C17.9804 20.6054 18.2348 20.5 18.5 20.5ZM21.5 19.5C21.7342 19.5 21.961 19.5821 22.1408 19.7322C22.3206 19.8822 22.4421 20.0906 22.484 20.321C22.6852 20.2043 22.8933 20.0998 23.107 20.008C23.774 19.723 24.773 19.566 25.675 19.849C26.148 19.999 26.623 20.279 26.975 20.756C27.29 21.181 27.46 21.698 27.494 22.279L27.5 22.5V26.5C27.4997 26.7549 27.4021 27 27.2272 27.1854C27.0522 27.3707 26.813 27.4822 26.5586 27.4972C26.3042 27.5121 26.0536 27.4293 25.8582 27.2657C25.6627 27.1021 25.5371 26.8701 25.507 26.617L25.5 26.5V22.5C25.5 22.17 25.42 22.016 25.368 21.945C25.2934 21.8522 25.1905 21.7862 25.075 21.757C24.727 21.647 24.226 21.705 23.893 21.847C23.393 22.061 22.935 22.397 22.623 22.708L22.5 22.84V26.5C22.4997 26.7549 22.4021 27 22.2272 27.1854C22.0522 27.3707 21.813 27.4822 21.5586 27.4972C21.3042 27.5121 21.0536 27.4293 20.8582 27.2657C20.6627 27.1021 20.5371 26.8701 20.507 26.617L20.5 26.5V20.5C20.5 20.2348 20.6054 19.9804 20.7929 19.7929C20.9804 19.6054 21.2348 19.5 21.5 19.5ZM18.5 17.5C18.7652 17.5 19.0196 17.6054 19.2071 17.7929C19.3946 17.9804 19.5 18.2348 19.5 18.5C19.5 18.7652 19.3946 19.0196 19.2071 19.2071C19.0196 19.3946 18.7652 19.5 18.5 19.5C18.2348 19.5 17.9804 19.3946 17.7929 19.2071C17.6054 19.0196 17.5 18.7652 17.5 18.5C17.5 18.2348 17.6054 17.9804 17.7929 17.7929C17.9804 17.6054 18.2348 17.5 18.5 17.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_358">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(10.5 10.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About me section */}
      <section className="bg_primary">
        <div className="myContainer my_120">
          <div className="row align-items-center  flex-column flex-md-row ">
            <div className="col-11 col-md-6  col-lg-5">
              <div className="position-relative  ">
                <div className="w_85">
                  {" "}
                  <img className="w-100" src={user} alt="" />
                </div>
                <div className="user_lap pb-sm-4 px-2 pb-3 px-sm-4  pt-3 pt-sm-4">
                  <p className="text-secondary mb-2">Name</p>
                  <p className="details_p">Joginder Saini</p>
                  <p className="text-secondary mb-2">Email</p>
                  <p className="details_p">jogindersaini@gmail.com</p>
                  <p className="text-secondary mb-2">Phone</p>
                  <p className="details_p">+91 8950402201</p>
                </div>
              </div>
            </div>
            <div className="col-11 col-md-6 col-lg-7">
              <div className="">
                <p className="text-white p-0 mt-4 mt-md-0">About me</p>
                <h2 className="fw-semibold fs_2xl user_lap_h1">
                  Architecting Digital Delights: Unleashing Full-Stack Magic
                </h2>
                <p className="text-white fs_lsm">
                  Lorem ipsum dolor sit amet consectetur. Nibh porta sed
                  volutpat enim at ac pellentesque fringilla. Pharetra amet
                  dignissim placerat venenatis etiam diam. Accumsan commodo
                  cursus tellus dui. Porta odio venenatis et tempus dictum enim
                  sagittis. Ligula cursus duis sodales cras rhoncus volutpat at.
                  Sit non interdum lorem feugiat nunc ut. Dolor dui montes nunc
                  tincidunt nisl condimentum. At nunc dolor elementum et iaculis
                  vitae vestibulum vel sagittis. In nam mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill section */}
      <section>
        <div className="myContainer my_120">
          <div className="w_max_500_auto text-center">
            <h2 className="fs_2xl fw-semibold">My Skills</h2>
            <p className="text-secondary">
              Experienced full-stack developer adept at crafting seamless
              digital solutions, bridging front-end elegance with robust
              back-end functionality for user-centric experiences.
            </p>
          </div>
          <div className="row justify-content-center mb-3">
            {data.map((item, index) => {
              return (
                <div
                  className="col-6 col-sm-4 col-md-3 col-xl-2 py-4"
                  key={index}
                >
                  <div className="skills px-5 py-3 py-sm-4 py-md-5 text-center rounded-3">
                    <div className="mb-4  ">
                      <img src={item.img} alt="" />
                    </div>
                    <p className="mb-0">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row  flex-column flex-md-row align-items-center justify-content-center">
            <div className="col-10 col-md-6 col-lg-4">
              <div className="border rounded-3 p-4 text-center">
                {" "}
                <h4 className="skill_low_p">Fronend Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elit convallis dictum
                  lobortis id ipsum risus urna senectus suscipit. Potenti cursus
                  etiam in sollicitudin venenatis cras quis morbi. At gravida
                  sit etiam diam varius justo viverra cursus. Magna auctor.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-4">
              <div className="border rounded-3 p-4 text-center my-3 ">
                {" "}
                <h4 className="skill_low_p">Backend Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elit convallis dictum
                  lobortis id ipsum risus urna senectus suscipit. Potenti cursus
                  etiam in sollicitudin venenatis cras quis morbi. At gravida
                  sit etiam diam varius justo viverra cursus. Magna auctor.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-4">
              <div className="border rounded-3 p-4 text-center">
                <h4 className="skill_low_p">Project Testing</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elit convallis dictum
                  lobortis id ipsum risus urna senectus suscipit. Potenti cursus
                  etiam in sollicitudin venenatis cras quis morbi. At gravida
                  sit etiam diam varius justo viverra cursus. Magna auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section>
        <div className="bg_primary">
          <div className="myContainer my_120">
            <div className="w_max_500_auto  text-center">
              <h2 className="fs_2xl fw-semibold text-white">Projects</h2>
              <p className="text-secondary mb-4">
                Lorem ipsum dolor sit amet consectetur. Lacus tempus tortor
                rhoncus eu velit.
              </p>
            </div>

            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* contact us section */}

      <section className="contact_sec">
        <div className="myContainer py-5">
          <div className="row  justify-content-center align-items-center flex-column flex-lg-row py-5">
            <div className="col-11 col-lg-5">
              <div className="contact bg-light p-3 rounded-2">
                <h4 className="text-danger fs_2xl fw-bold">
                  Lets work togather!
                </h4>
                <p className="fs_lsm">
                  Lorem ipsum dolor sit amet consectetur. Ut sociis aenean
                  aliquam elementum eget sit orci.
                </p>
                <form action="">
                  <input
                    className="rounded-2 py-2 ps-2 me-2 input_text fs_sm"
                    placeholder="First name"
                    type="text"
                    name=""
                    id=""
                    
                  />
                  <input
                    className="rounded-2 py-2 ps-2 input_text fs_sm"
                    placeholder="Last name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="rounded-2 py-2 ps-2 me-2 input_text fs_sm"
                    placeholder="Email Address"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="rounded-2 py-2 ps-2 input_text fs_sm"
                    placeholder="Phone Number"
                    type="text"
                    name=""
                    id=""
                  />
                  <textarea
                    className=" rounded-2 py-2 ps-2 mb-2 fs_sm input_area"
                    placeholder="Message"
                    rows="4"
                    name=""
                    id=""
                  />
                  <button className="header-btn ff_Outfit">Send Message</button>
                </form>
              </div>
            </div>
            <div className=" col-11 col-lg-7">
              <div>
                <div className="contact_right p-1 ">
                  <h3 className="ff_Kaushan text-danger fs_2_5xl my-4">
                    Say Hello...
                  </h3>
                  <div className="">
                    <p className="ff_Outfit fs_lsm">
                      Connecting with new people is one of the best parts of my
                      work. Use the form below to send me a message about
                      anything on your mind—whether it’s a project idea, a
                      question, or just a friendly hello. I'll be sure to get
                      back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lappy_man d-none d-lg-block">
          <img src={lappy_man} alt="" />
        </div>
      </section>

      {/* footer section */}

      <section>
        <div className="bg-dark">
          <div className="container">
            <div className="py-5 text-white d-flex align-items-center justify-content-center flex-md-row flex-column-reverse ">
              <div className="d-flex px-3 px-lg-5 footer justify-content-between justify-content-md-center gap-md-5">
                <p>Home</p>
                <p>About me</p>
                <p className="d-md-none">My Skills</p>
                <p className="d-md-none">Projects</p>
              </div>
              <div className="text-white mb-4  px-4 text-center  footer_name ">
                <h2 className="ff_Uncial fs_2xl fw-normal">Joginder Saini</h2>
              </div>
              <div className="d-flex gap-5 align-items-center justify-content-center px-3 px-lg-5 d-none d-md-flex">
                <p>My Skills</p>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
