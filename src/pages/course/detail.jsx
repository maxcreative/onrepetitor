import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { Link, NavLink } from "react-router-dom";
import "./course.css";
 
import Accordion from "../../components/Accordion2";
import { accordionData } from "../../utils/kurrikulum";

function About() {
  const [tabButton, setTabButton] = useState(1);
  return (
    <>
      <Nav />

      <section className="breadcrumpsection" style={{background:"#F5FBF9", padding: "50px 100px" }}>
        <div className="xxx1" style={{ display: "flex" }}>
          <div className="xxx5" style={{padding:"0 40px"}}>
            <div>
              <Link to={"/"} style={{ textDecoration: "underline" }}>
                Ana Səhifə
              </Link>
              <span style={{ margin: "0 10px" }}>/</span>
              <Link to={"/news"} style={{ textDecoration: "underline" }}>
                Blok imtahanları
              </Link>
              <span style={{ margin: "0 10px" }}>/</span>
              <span>1-ci qrup</span>
            </div>

            <div
              className="newstitle"
              style={{
                fontWeight: "600",
                fontSize: "30px",
                margin: "50px 0 7px 0",
              }}
            >
              1-ci qrup
            </div>
            <div style={{ fontSize: "15px", marginBottom: "20px" }}>
              Onrepetitor, uğurlu tələbə olmaq üçün lazım olan bütün alətləri
              özündə birləşdirən güclü onlayn proqram dəstidir.
            </div>
            <img src="/assets/coursemain.png"/>


          <div style={{padding:"20px 0"}}>
            <button onClick={()=>setTabButton(1)} className={tabButton==1 ? "tabActive" : "tabDeactive"}>Ümumi məlumat</button>
            <button onClick={()=>setTabButton(2)} className={tabButton==2 ? "tabActive" : "tabDeactive"}>Kurikulum</button>
            <button onClick={()=>setTabButton(3)} className={tabButton==3 ? "tabActive" : "tabDeactive"}>Nümunə videolar</button>
            <button onClick={()=>setTabButton(4)} className={tabButton==4 ? "tabActive" : "tabDeactive"}>Rəylər</button>
          </div>

          {tabButton==1?<div> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu eleifend erat. Maecenas dictum purus vel sollicitudin egestas. Vivamus sed metus quis nisl posuere condimentum. Sed enim justo, placerat a ipsum non, ornare congue est. Etiam egestas, diam ac finibus condimentum, quam metus porta eros, ac iaculis tortor nisl a eros. Integer sagittis purus vel nibh porttitor vulputate.</p>

          </div>:''}
          {tabButton==2?<div>

            <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>


          </div>:''}
          {tabButton==3?<div style={{justifyContent:"center",display:"flex", flexWrap:"wrap"}}>


            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>
            <div className="xxx3"
              style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"30%",
                margin:"10px 10px"
              }}
            >
              <img src="/assets/triqonom.png" />
            </div>

          </div>:''}
          {tabButton==4?<div className="xxx9" style={{justifyContent:"center",display:"flex", flexWrap:"wrap"}}>


                <div className="yyy1" style={{borderRadius:"10px", padding:"20px 20px", background:"#fff",
                  boxShadow: "6px 5px 19px 12px #75757540",
                  width:"30%",
                  margin:"10px 10px"
                }}>
                  <img src="/assets/starss.svg"/>
                  <div style={{margin:"20px 0", fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at.</div>
                  <div style={{display:"flex"}}>
                    <img src="/assets/profile.png" style={{width:"40px"}}/><span style={{padding:"8px 0 0 15px", fontWeight:"600"}}>Adam Smith</span>
                  </div>

                </div>

                <div className="yyy1" style={{borderRadius:"10px", padding:"20px 20px", background:"#fff",
                  boxShadow: "6px 5px 19px 12px #75757540",
                  width:"30%",
                  margin:"10px 10px"
                }}>
                  <img src="/assets/starss.svg"/>
                  <div style={{margin:"20px 0", fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at.</div>
                  <div style={{display:"flex"}}>
                    <img src="/assets/profile.png" style={{width:"40px"}}/><span style={{padding:"8px 0 0 15px", fontWeight:"600"}}>Adam Smith</span>
                  </div>

                </div>

                <div className="yyy1" style={{borderRadius:"10px", padding:"20px 20px", background:"#fff",
                  boxShadow: "6px 5px 19px 12px #75757540",
                  width:"30%",
                  margin:"10px 10px"
                }}>
                  <img src="/assets/starss.svg"/>
                  <div style={{margin:"20px 0", fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at.</div>
                  <div style={{display:"flex"}}>
                    <img src="/assets/profile.png" style={{width:"40px"}}/><span style={{padding:"8px 0 0 15px", fontWeight:"600"}}>Adam Smith</span>
                  </div>

                </div>
          </div>:''}


          </div>
          <div>
              <div className="xxx2" style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"350px",
                marginLeft:"30px",
                marginTop:"100px",
                padding:"30px 30px"
              }}>
                <div style={{fontWeight:"600", borderBottom:"3px solid #FD661F", width:"70px",paddingBottom:"8px", marginBottom:"8px"}}>Kursu al</div>
                <div><span style={{fontWeight:"700", fontSize:"25px"}}>380 ₼</span><span style={{textDecoration:"line-through",color:"#FD661F", fontWeight:"600",marginLeft:"10px"}}>500 ₼</span></div>
                <div><img src="/assets/feedbacks.svg" style={{marginBottom:"8px"}}></img></div>
                <div><button style={{background:"#07A169", padding:"10px 30px", width:"100%", color:"#fff", borderRadius:"10px",marginBlock:"10px"}}>İndi Al</button></div>
                <div style={{paddingLeft:"30px"}}>
                  <ul style={{listStyleType: "circle"}}>
                    <li>4.684 ədəd dərs videosu</li>
                    <li>45.986 ədəd sual həlli</li>
                    <li>5 dəfə müəllimlə birə bir dərs işləmə</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
