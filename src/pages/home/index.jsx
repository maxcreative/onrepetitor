import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./home.css";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import { accordionData } from "../../utils/content";
function Home() {
  const [tabButton, setTabButton] = useState(true);
  return (
    <>
      <Nav />

      <section className="mainHeroMargin" style={{ marginTop: "-77px" }}>
        <div
          className="mainhero"
          style={{ display: "flex", padding: "150px 140px 0 140px" }}
        >
          <div className="mainhero1" style={{width:"50%"}}>
             <div className="mh1" style={{background:"#fff",padding:"10px 10px", width:"300px",borderRadius:"10px", textAlign:"center", fontSize:"18px", fontWeight:"600"}}>Bizimlə öyrənmək daha rahatdır</div>
             <div className="mh2" style={{margin:"30px 0",fontSize:"50px", fontWeight:"700"}}>Təhsilinizə sərmayəni Onrepetitor vasitəsilə edin</div>
             <div><button style={{background:"#07A169", padding:"15px 20px", color:"#fff",marginBottom:"30px", borderRadius:"15px"}}>İNDİ QOŞUL</button></div>


          </div>
          <div  className="mainhero2" style={{width:"50%"}}>
            <div style={{ position:"relative"}}>
            <img src="/assets/boy.png" style={{margin:"auto"}} />
            <div style={{padding:"12px 13px",display:"flex", background:"#fff", borderRadius:"15px", position:"absolute", top:"50%"}}>
              <div><img src="/assets/play.svg" style={{marginRight:"10px"}}/></div>
              
              <div>
                <div style={{fontWeight:"700"}}>5000+ video dərslə</div>
                <div style={{fontWeight:"500"}}>tələbə namizədlərinə dəstək</div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>
      <section className="universection" style={{ padding: "100px 100px" }}>
        <div>
          <h1 className="title1">Universitetə qəbul</h1>
          <p className="subtitle1">
            Onrepetitor, uğurlu tələbə olmaq üçün lazım olan bütün alətləri
            özündə birləşdirən güclü onlayn proqram dəstidir.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            className={tabButton ? "tabActive" : "tabDeactive"}
            onClick={() => {
              setTabButton(true);
            }}
          >
            Qəbul İmtahanları
          </button>
          <button
            className={tabButton ? "tabDeactive" : "tabActive"}
            onClick={() => {
              setTabButton(false);
            }}
          >
            Buraxılış İmtahanları
          </button>
        </div>
        {tabButton ? (
          <Swiper
            
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 1,
              },
              968: {
                // width: 768,
                slidesPerView: 4,
              },
            }}
            
            modules={[Pagination]}
            className="mySwiper"
            style={{ padding: "50px 50px" }}
          >
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 1,
            },
            968: {
              // width: 768,
              slidesPerView: 4,
            },
          }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ padding: "50px 50px" }}
          >
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: "6px 5px 19px 12px #75757540",
                  borderRadius: "18px",
                }}
              >
                <div>
                  <img
                    style={{ borderRadius: "18px" }}
                    src="/assets/training2.png"
                  />
                </div>
                <div
                  className="reviewback"
                  style={{
                    borderRadius: "22px",
                    paddingTop: "5px",
                    position: "relative",
                    background: "#fff",
                    width: "70%",
                    marginTop: "-19px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ display: "inline" }}>
                    <img
                      src="/assets/review.png"
                      style={{ width: "80px", display: "inline" }}
                    />
                  </div>
                  <div style={{ display: "inline", fontSize: "14px" }}>
                    +40 İstifadəçi
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/star.png"
                    style={{ width: "150px", margin: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src="/assets/description.png"
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <div>
                   
                  <div style={{display:'flex', textAlign:"center", padding:"15px 15px"}}>
                    <div style={{width:"50%", paddingTop:"10px"}}><span style={{color:"#FD661F", fontWeight:"700", fontSize:"17px"}}>380 ₼</span><span style={{color:"#9d9d9d",textDecoration:"line-through", fontWeight:"600",marginLeft:"10px", fontSize:"17px"}}>500 ₼</span></div>
                    <div style={{width:"50%"}}><button style={{background:"#07A169", borderRadius:"10px", color:"#fff", padding:"8px 13px"}}>İndi Al</button></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </section>

      <section
        style={{
          background: "#F5FBF9",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <div className="orangetitle">Faydalarımız</div>
          <div
            style={{
              fontWeight: "600",
              fontSize: "29px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <span className="orangespan">Onrepetitor</span> nə verir?
          </div>
        </div>

        <div
          className="desktopp columns-3"
          style={{ paddingRight: "140px", paddingLeft: "140px" }}
        >
          <div style={{ width: "60%", textAlign: "center",margin:"auto" }}>
            <div>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon1.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
              Sizin üçün uyğunlaşdırılmış proqram
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div style={{ marginTop: "20px" }}>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon2.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
              Canlı dərs ala bilmə xüsusiyyəti
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div style={{margin:"auto"}}>
            <div style={{margin:"auto"}}>
              <img src="/assets/orange.png" />
            </div>
          </div>
          <div style={{ width: "60%", textAlign: "center",margin:"auto" }}>
            <div>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon3.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
            Video həlli olan sınaq sualları
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div style={{ marginTop: "20px" }}>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon4.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
            İnkişafınızın analizi <br/>sistemi
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
        </div>




        <div
          className="mobilee"
          style={{display:"none", paddingRight: "20px", paddingLeft: "20px" }}
        >
          <div style={{ width: "60%", textAlign: "center",margin:"auto" }}>
            <div>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon1.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
              Sizin üçün uyğunlaşdırılmış proqram
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div style={{ marginTop: "20px" }}>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon2.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
              Canlı dərs ala bilmə xüsusiyyəti
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div style={{margin:"auto", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{margin:"auto"}}>
              <img src="/assets/orange.png" />
            </div>
          </div>
          <div style={{ width: "60%", textAlign: "center",margin:"auto" }}>
            <div>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon3.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
            Video həlli olan sınaq sualları
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div style={{ marginTop: "20px" }}>
              <img
                style={{ margin: "auto", marginBottom: "20px" }}
                src="/assets/icon4.svg"
              />
            </div>
            <div style={{ fontWeight: "700" }}>
            İnkişafınızın analizi <br/>sistemi
            </div>
            <p style={{ fontSize: "15px", marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
        </div>



      </section>

      <section className="universection" style={{ padding: "60px 100px" }}>

      <div>
          <h1 className="title1">Nümunə Dərslər</h1>
          <p className="subtitle1">
            Onrepetitor, uğurlu tələbə olmaq üçün lazım olan bütün alətləri
            özündə birləşdirən güclü onlayn proqram dəstidir.
          </p>
        </div>


        <Swiper
           breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 1,
            },
            968: {
              // width: 768,
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding: "50px 50px" }}
        >
          <SwiperSlide>
            <div
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="desktopp">
        <div
          className=" universection"
          style={{ paddingLeft: "140px", paddingRight: "140px" , margin:"auto"}}
        >
          <div className="" style={{display:"flex", backgroundColor: "#F5FBF9",borderRadius:"10px" }}>
           <div style={{width:"62%",padding:"63px 0px 63px 44px"}}>
                <div style={{fontSize:"40px", fontWeight:"700",marginBottom:"20px"}}><span style={{color:"#07A169"}}>Onrepetitor</span>-a niyə qoşulmalısınız?</div>
                
                <div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Müəllim yanına gedərkən xərclədiyiniz vaxta qənaət etmək üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Başa düşmədiyiniz mövzuları fərqli müəllimlərdən dinləyə bildiyiniz üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>İstədiyiniz vaxt heç bir sərhəd olmadan təkrarlamaq fürsəti təqdim etdiyi üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Öyrəndiklərinizi real vaxtda testlərlə inkişaf etdirə bilmə imkanı olduğu üçün</span></div>
                </div>


                <div style={{marginTop:"40px"}}>
                    <a style={{color:"#fff", background:"#07A169", borderRadius:"10px",padding:"15px"}}>İNDİ QOŞUL</a>
                </div>
           </div>
           
            <div className="niyeimage" style={{width:"38%"}}>
              <img src="/assets/niyee.png" style={{height:"500px", marginLeft:"auto"}}/>
            </div>
          </div>
        </div>
      </section>


      <section className="mobilee" style={{display:"none"}}>
        <div
          className="container universection"
          style={{ paddingLeft: "140px", paddingRight: "140px" }}
        >
          <div style={{ backgroundColor: "#F5FBF9",borderRadius:"10px" }}>
           <div style={{padding:"30px 10px"}}>
                <div style={{textAlign:"center",fontSize:"25px", fontWeight:"700",marginBottom:"20px"}}><span style={{color:"#07A169"}}>Onrepetitor</span>-a niyə qoşulmalısınız?</div>
                
                <div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Müəllim yanına gedərkən xərclədiyiniz vaxta qənaət etmək üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Başa düşmədiyiniz mövzuları fərqli müəllimlərdən dinləyə bildiyiniz üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>İstədiyiniz vaxt heç bir sərhəd olmadan təkrarlamaq fürsəti təqdim etdiyi üçün</span></div>
                  <div style={{display:"inline-block", marginBottom:"10px"}}><img src="/assets/starblack.svg" style={{display:"inline"}}/><span style={{display:"inline", fontSize:"15px", fontWeight:"400", marginLeft:"10px", paddingBottom:"20px"}}>Öyrəndiklərinizi real vaxtda testlərlə inkişaf etdirə bilmə imkanı olduğu üçün</span></div>
                </div>

                <div style={{marginTop:"20px",textAlign:"center"}}>
                    <a style={{color:"#fff", background:"#07A169", borderRadius:"10px",padding:"15px"}}>İNDİ QOŞUL</a>
                </div>
           </div>
           
            
          </div>
        </div>
      </section>

      <section className="universection" style={{paddingTop:"100px"}}>
        <div>
          <div>
            <h1 className="title1">Axtardığın Sualların Cavabı</h1>
            <p className="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </div>
          <div></div>
        </div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
