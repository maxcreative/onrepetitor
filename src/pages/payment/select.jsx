import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { Link, NavLink } from "react-router-dom";
import "./payment.css";
 
import Accordion from "../../components/Accordion2";
import { accordionData } from "../../utils/kurrikulum";

function Payment() {
  const [tabButton, setTabButton] = useState(1);
  return (
    <>
      <Nav />

      <section className="breadcrumpsection" style={{background:"#F5FBF9", padding: "50px 100px" }}>
        <div className="xxx1" style={{ display: "flex" }}>
          <div className="xxx5" style={{width:"60%",padding:"0 40px"}}>
             


             

            <div>
              <div style={{fontWeight:"600", fontSize:"25px", marginTop:"50px"}}>Ödəniş formatları</div>
              


              <div style={{display:"flex", margin:"25px 0 15px 0"}}>
                <div style={{marginRight:"10px"}}><input type="radio"/></div>
                <div>
                  <div style={{fontWeight:"500"}}>Kredit kartı ilə ödəniş</div>
                  <div style={{fontSize:"13px", color:"#959595"}}>Pay with your Visa, Mastercard.</div>
                  </div>
              </div>

              <div style={{display:"flex", margin:"10px 0 15px 0"}}>
                <div style={{marginRight:"10px"}}><input type="radio"/></div>
                <div>
                  <div style={{fontWeight:"500"}}>Tam kartla ödəniş</div>
                  <div style={{fontSize:"13px", color:"#959595"}}>Make payment directly through bank account.</div>
                  </div>
              </div>
              <div style={{display:"flex", margin:"10px 0 15px 0"}}>
                <div style={{marginRight:"10px"}}><input type="radio"/></div>
                <div>
                  <div style={{fontWeight:"500"}}>Bir kart taksitlə ödəniş</div>
                  <div style={{fontSize:"13px", color:"#959595"}}>Make payment directly through bank account.</div>
                  </div>
              </div>
            </div>
             


         

          


          </div>
          <div>
            <div className="cccc" style={{fontWeight:"600", fontSize:"25px",marginTop:"50px",marginLeft:"30px",marginBottom:"15px"}}>Xülasə</div>
              <div className="xxx2" style={{
                boxShadow: "6px 5px 19px 12px #75757540",
                borderRadius: "18px",
                width:"350px",
                marginLeft:"30px",
                
                padding:"30px 30px"
              }}>
                 

              <div style={{display:"flex", padding:"10px 0"}}>
                <div><img src="/assets/checkout1.png" style={{width:"80px", margin:"0px 10px 30px 0px"}}/></div>
                <div><div style={{fontWeight:"600"}}>1-ci qrup</div>
                <img src="/assets/price.svg" style={{marginTop:"30px"}}/>
                </div>
                <div style={{marginLeft:"auto"}}><img src="/assets/close.svg"/></div>
              </div>



                <hr/>
                <div style={{fontWeight:"300", fontSize:"15px", color:"#07A169",marginTop:"15px", marginBottom:"15px"}}>+ Promo kod əlavə et</div>
                <div style={{fontWeight:"600", fontSize:"18px"}}>Ödənəcək məbləğ</div>

                <div style={{display:"flex", margin:"12px 0"}}>
                  <div>Toplam</div>
                  <div style={{marginLeft:"auto", fontWeight:"600"}}>380 ₼</div>
                </div>
                <div><button style={{background:"#07A169", padding:"10px 30px", width:"100%", color:"#fff", borderRadius:"10px",marginBlock:"10px"}}>Davam Et</button></div>
                
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Payment;
