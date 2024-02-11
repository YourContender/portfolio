import React from "react";
import me1 from "../../img/me1.jpg";
import me2 from "../../img/me2.jpg";
import me3 from "../../img/me3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.scss";
import { EffectCards } from "swiper/modules";

const Slider = () => {
	return (
		<>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className="slider-photo" src={me1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="slider-photo" src={me2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="slider-photo" src={me3} alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
