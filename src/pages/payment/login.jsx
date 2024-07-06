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
             

            <div
              className="newstitle"
              style={{
                fontWeight: "600",
                fontSize: "30px",
                margin: "50px 0 7px 0",
              }}
            >
             Ödəniş məlumatları
            </div>
            <div style={{borderRadius:"5px", padding:"10px 10px", fontSize: "15px", marginBottom: "20px", background:"#FFF5EA", border:"2px solid #FFE4C7" }}>
            Hesabınız varsa <span style={{color:"#07A169", fontWeight:"600"}}>Giriş</span> edib, ödəniş prosesini sürətli bitirə bilərsiniz
            </div>


            <div style={{borderBottom:"2px solid #4848484f", margin:"40px 0"}}>
              <div style={{
                    width: "100px",
                    margin: "auto",
                    background: "#f5fbf9",
                    textAlign: "center",
                    marginBottom:"-13px"
              }}>VƏ YA</div>
            </div>

            <div>
              <div style={{fontWeight:"600", fontSize:"25px"}}>Yeni hesab yarat</div>
              <form>
                <input style={{
                      width: "100%",
                      border: "2px solid #4b4b4b33",
                      borderRadius: "6px",
                      padding: "11px 26px",
                      margin: "10px 0",
                }} type="text" placeholder="Ad Soyad" />
                <input style={{
                  width: "100%",
                  border: "2px solid #4b4b4b33",
                  borderRadius: "6px",
                  padding: "11px 26px",
                  margin: "10px 0",
                }} type="text" placeholder="Ad Soyad" />
                <div style={{display:"flex"}}>
                <input style={{
                  width: "48%",
                  border: "2px solid #4b4b4b33",
                  borderRadius: "6px",
                  padding: "11px 26px",
                  margin: "10px 0",
                }} type="password" placeholder="Ad Soyad" />
                <input style={{
                  width: "48%",
                  border: "2px solid #4b4b4b33",
                  borderRadius: "6px",
                  padding: "11px 26px",
                  margin: "10px 0",
                  marginLeft:"auto"
                }} type="password" placeholder="Ad Soyad" />
                </div>

                <div style={{display:"flex"}}>
                  <input style={{}} type="checkbox"/>
                  <div style={{marginLeft:"10px", margin:"10px 0 10px 10px"}}>I agree to the <a  style={{color:"#07A169", fontWeight:"600"}}>Terms & conditions, Privacy policy & Return policy</a></div>
                </div>
                <div style={{textAlign:"right"}}><button style={{background:"#000", borderRadius:"10px",color:"#fff", padding:"15px 40px", fontWeight:"600", margin:"30px 0", fontSize:"19px"}}>Hesab yarat</button></div>
              </form>
            </div>
             


         

          


          </div>
          <div>
            <div className="cccc" style={{fontWeight:"600", fontSize:"25px",marginTop:"100px",marginLeft:"30px",marginBottom:"15px"}}>Xülasə</div>
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
