import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "6.png",
            avatar: "1.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "7.png",
            avatar: "2.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "8.jpeg",
            avatar: "3.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "9.png",
            avatar: "4.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".intro_prev",
                    nextEl: ".intro_next",
                }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="slider-item">
                            <img
                                src={`/images/items/${item.img}`}
                                alt=""
                                className="img-fluid"
                            />
                            {/* <div className="slider-item-avatar">
                                <img
                                    src={`/images/avatar/${item.avatar}`}
                                    alt=""
                                />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.author}</p>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>


        </>
    );
};

export default IntroSlider;

