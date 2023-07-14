import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import bestSellersslideOne from "../data/bestSellersData";
import bestSellersslideTwo from "../data/slideTwo";
import bestSellersslideThree from "../data/slideThree";

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <div className="best-sellers-container">
        <div className="slider-container">
          <div className="best-seller-header">
            <h2 className="section-title">SHOP NEW IN</h2>
            <p className="new-in-text">
              Stylish, sleek and glam pieces to elevate your personal style
            </p>
          </div>
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="image-grid">
                {bestSellersslideOne.map((item, index) => (
                  <div className="best-seller-item" key={index}>
                    <img
                      className="bestSellerImg"
                      src={item.image}
                      alt={`Best Seller ${index + 1}`}
                    />
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-grid">
                {bestSellersslideTwo.map((item, index) => (
                  <div className="best-seller-item" key={index}>
                    <img
                      className="bestSellerImg"
                      src={item.image}
                      alt={`Best Seller ${index + 1}`}
                    />
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-grid">
                {bestSellersslideThree.map((item, index) => (
                  <div className="best-seller-item" key={index}>
                    <img
                      className="bestSellerImg"
                      src={item.image}
                      alt={`Best Seller ${index + 1}`}
                    />
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
