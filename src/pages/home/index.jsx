import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Pagination } from 'swiper/modules';


import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import { accordionData } from '../../utils/content';
function Home() {
  const [tabButton, setTabButton] = useState(true);
  return (
    <>
      <Nav />
      

      <section style={{marginTop:"-77px"}}>
        <div className='mainhero' style={{display: "flex", padding: "150px 140px 0 140px" }}>
          <div><img src="/assets/tehsil.png"/></div>
          <div><img src="/assets/boy.png"/></div>
        </div>
      </section>
       <section style={{padding:"100px 100px"}}>
        <div style={{textAlign:"center"}}>
          <button className={tabButton ? 'tabActive' : 'tabDeactive'} onClick={()=>{setTabButton(true)}}>Qəbul İmtahanları</button>
           <button className={tabButton ? 'tabDeactive' : 'tabActive'} onClick={()=>{setTabButton(false)}}>Buraxılış İmtahanları</button> 
        </div>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{padding:"50px 50px"}}
      >
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <div><img style={{borderRadius:"18px"}} src='/assets/training.png'/></div>
            <div className='reviewback' style={{backgroundColor:"#FAFAFA", width: "70%", marginTop: "-19px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}>
              <div style={{display:"inline"}}><img src='/assets/review.png' style={{width:"80px",display:"inline"}}/></div>
              <div style={{display:"inline", fontSize:"14px"}}>+40 İstifadəçi</div>
            </div>
            <div><img src='/assets/star.png' style={{width:"150px", margin:"auto"}}/></div>
            <div><img src='/assets/description.png' style={{width:"90%", marginLeft:"20px", marginBottom:"20px"}}/></div>
            <div><img src='/assets/price.png' style={{width:"80%", margin:"auto", marginBottom:"20px"}}/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <div><img style={{borderRadius:"18px"}} src='/assets/training.png'/></div>
            <div className='reviewback' style={{backgroundColor:"#FAFAFA", width: "70%", marginTop: "-19px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}>
              <div style={{display:"inline"}}><img src='/assets/review.png' style={{width:"80px",display:"inline"}}/></div>
              <div style={{display:"inline", fontSize:"14px"}}>+40 İstifadəçi</div>
            </div>
            <div><img src='/assets/star.png' style={{width:"150px", margin:"auto"}}/></div>
            <div><img src='/assets/description.png' style={{width:"90%", marginLeft:"20px", marginBottom:"20px"}}/></div>
            <div><img src='/assets/price.png' style={{width:"80%", margin:"auto", marginBottom:"20px"}}/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <div><img style={{borderRadius:"18px"}} src='/assets/training.png'/></div>
            <div className='reviewback' style={{backgroundColor:"#FAFAFA", width: "70%", marginTop: "-19px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}>
              <div style={{display:"inline"}}><img src='/assets/review.png' style={{width:"80px",display:"inline"}}/></div>
              <div style={{display:"inline", fontSize:"14px"}}>+40 İstifadəçi</div>
            </div>
            <div><img src='/assets/star.png' style={{width:"150px", margin:"auto"}}/></div>
            <div><img src='/assets/description.png' style={{width:"90%", marginLeft:"20px", marginBottom:"20px"}}/></div>
            <div><img src='/assets/price.png' style={{width:"80%", margin:"auto", marginBottom:"20px"}}/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <div><img style={{borderRadius:"18px"}} src='/assets/training.png'/></div>
            <div className='reviewback' style={{backgroundColor:"#FAFAFA", width: "70%", marginTop: "-19px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}>
              <div style={{display:"inline"}}><img src='/assets/review.png' style={{width:"80px",display:"inline"}}/></div>
              <div style={{display:"inline", fontSize:"14px"}}>+40 İstifadəçi</div>
            </div>
            <div><img src='/assets/star.png' style={{width:"150px", margin:"auto"}}/></div>
            <div><img src='/assets/description.png' style={{width:"90%", marginLeft:"20px", marginBottom:"20px"}}/></div>
            <div><img src='/assets/price.png' style={{width:"80%", margin:"auto", marginBottom:"20px"}}/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <div><img style={{borderRadius:"18px"}} src='/assets/training.png'/></div>
            <div className='reviewback' style={{backgroundColor:"#FAFAFA", width: "70%", marginTop: "-19px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}>
              <div style={{display:"inline"}}><img src='/assets/review.png' style={{width:"80px",display:"inline"}}/></div>
              <div style={{display:"inline", fontSize:"14px"}}>+40 İstifadəçi</div>
            </div>
            <div><img src='/assets/star.png' style={{width:"150px", margin:"auto"}}/></div>
            <div><img src='/assets/description.png' style={{width:"90%", marginLeft:"20px", marginBottom:"20px"}}/></div>
            <div><img src='/assets/price.png' style={{width:"80%", margin:"auto", marginBottom:"20px"}}/></div>
          </div>
        </SwiperSlide>
        
      </Swiper>
       </section>


       <section style={{padding:"100px 100px"}}>
       <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{padding:"50px 50px"}}
      >
       
       
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <img src='/assets/triqonom.png'/>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <img src='/assets/triqonom.png'/>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <img src='/assets/triqonom.png'/>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <img src='/assets/triqonom.png'/>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{boxShadow:"6px 5px 19px 12px #75757540", borderRadius:"18px"}}>
            <img src='/assets/triqonom.png'/>
           </div>
        </SwiperSlide>
        
      </Swiper>
       </section>


        <section>
            <div className="container" style={{paddingLeft:"140px", paddingRight:"140px"}}>
                <div className="columns-2" style={{backgroundColor:"#F5FBF9"}}>c
                    <div>1</div>
                    <div className="niyeimage" >2</div>
                </div>
            </div>
        </section>


        <section>
       <div>
        <div>
            <h1 className="titleh1">Axtardığın Sualların Cavabı</h1>
            <p className="titlesub_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
        </div>
        <div>

        </div>
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
