import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Canvas } from '@react-three/fiber';
import { Home } from './Home';
import tictac from "./models/tictactoe.mov"
import calc from "./models/calc.mov"
import list from "./models/list.mov"
import stopwatch from "./models/stopwatch.mov"
import temp from "./models/tempconv.mov"
import weather from "./models/weather.mp4"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Projects() {
  return (
    <section className="project-section">
      <div className="card-container">
        <h1 className="heading">Portofolio</h1>
        <Swiper
          effect={'coverflow'}
          initialSlide={2}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container">
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
            <video src= {calc} autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">Calculator</p>
                <div className="project-topics">
                  <span className="filler">Javascript</span>
                  <span className="filler">React</span>
                  <span className="filler">CSS</span>
                  <span>Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <a href="https://surepos.github.io/calculator/">
                    {' '}
                    <button>Live View</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
                <video src= {tictac} autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title"> Tic Tac Toe</p>
                <div className="project-topics">
                  <span className="filler"> Javascript</span>
                  <span className="filler">React</span>
                  <span className="filler">CSS</span>
                  <span>Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <a href="https://surepos.github.io/tic-tac-toe/">
                    {' '}
                    <button>Live View</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
              <video src= {stopwatch} autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">Stopwatch</p>
                <div className="project-topics">
                  <span className="filler">Javascript</span>
                  <span className="filler">React</span>
                  <span className="filler">CSS</span>
                  <span>Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <a href="http://github">
                    {' '}
                    <button>Live View</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
              <video src= {weather } autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">Weather App</p>
                <div className="project-topics">
                  <span className="filler">Javascript</span>
                  <span className="filler">React</span>
                  <span className="filler">CSS</span>
                  <span className="filler">Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <a href="#">
                    {' '}
                    <button>Live View</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
              <video src={list} autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">To-do list</p>
                <div className="project-topics">
                  <span>Javascript</span>
                  <span>React</span>
                  <span>CSS</span>
                  <span className="filler">Blender</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <a href="http://github">
                    {' '}
                    <button>Live View</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
                <video src= {temp} autoPlay loop muted></video>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">Temprature converter</p>
                <div className="project-topics">
                  <span>Javascript</span>
                  <span>React</span>
                  <span>CSS</span>
                  <span>Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <button>Live View</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <div className="project">
                <button className="contact-button">AI Friend</button>
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <p className="project-title">Search Engine</p>
                <div className="project-topics">
                  <span>Javascript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Unity</span>
                </div>
                <div className="card-button">
                  <i className="fa-solid fa-code"></i>
                  <button>Live View</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="swiper-button-next slider-arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
