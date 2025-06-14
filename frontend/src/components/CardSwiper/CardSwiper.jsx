// src/components/CardSwiper/CardSwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles for the cards effect
import "swiper/css";
import "swiper/css/effect-cards";

import "./CardSwiper.css";

// Import your assets
import track1_url from "../../assets/music/track1.mp3";
import track2_url from "../../assets/music/track2.mp3";
import track3_url from "../../assets/music/track3.mp3";
import track4_url from "../../assets/music/track4.mp3";
import track5_url from "../../assets/music/track5.mp3";
import cover1_img from "../../assets/images/cover1.jpg";
import cover2_img from "../../assets/images/cover2.jpg";
import cover3_img from "../../assets/images/cover3.jpg";
import cover4_img from "../../assets/images/cover4.jpg";
import cover5_img from "../../assets/images/cover5.jpg";



const tracks = [
  {
    title: "كتير بنعشق",
    artist: "شرين عبد الوهاب",
    rating: "8.5",
    url: track1_url,
    cover: cover1_img,
  },
  {
    title: "مشاعر",
    artist: "شرين عبد الوهاب",
    rating: "9.2",
    url: track2_url,
    cover: cover2_img,
  },
  {
    title: "مين دا اللي نسيك",
    artist: "نانسي عجرم",
    rating: "8.9",
    url: track3_url,
    cover: cover3_img,
  },

  {
    title: "بحبك وحشتني",
    artist: "حسين الجسمي",
    rating: "9.0",
    url: track4_url,
    cover: cover4_img,
  },
  {
    title: "بيت حبيبي",
    artist: "يارا",
    rating: "9.1",
    url: track5_url,
    cover: cover5_img,
  },

];

const CardSwiper = ({ onPlayTrack }) => {
  return (
    <section className="card-swiper-section">
      <div className="content">
        <div className="swiper-wrapper">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Mousewheel, Pagination]}
            initialSlide={0}
            speed={800} // Speed increased for a smoother effect
            loop={true}
            rotate={true}
            mousewheel={{
              invert: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="my-card-swiper"
          >
            {tracks.map((track, index) => (
              <SwiperSlide key={index}>
                <img src={track.cover} alt={track.title} />
                <div className="overlay">
                  <div className="rating">
                    <span>★</span> {track.rating}
                  </div>
                  <div className="title-container">
                    <h2>{track.title}</h2>
                    <p>{track.artist}</p>
                  </div>
                  <div className="btn-group">
                  <button
                    className="card-play-button"
                    onClick={() => onPlayTrack(track.url)}
                    aria-label={`Play ${track.title}`}
                  >
                    <svg viewBox="0 0 100 100">
                      <path d="M40,30 75,50 40,70Z" />
                    </svg>
                    <span className="visually-hidden">Play</span>
                  </button>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
        
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default CardSwiper;
