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

      <section className="breadcrumpsection" style={{background:"#F5FBF9", padding: "50px 140px 0 140px", marginBottom:"-47px" }}>
        <div className="xxx1" style={{ display: "flex" }}>
          <div className="xxx5" style={{width:"50%",padding:"0 40px"}}>
             


             

            <div>
              <div style={{fontWeight:"600", fontSize:"30px", marginTop:"50px", marginBottom:"20px"}}>Təşəkkür edirik</div>
              

            <div style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum dolor risus, non rutrum leo elementum malesuada. Phasellus rutrum dapibus velit, ut dignissim magna porta vel.</div>
            </div>
             


         

          


          </div>
          <div className="sdcsrver">
            <img src="/assets/success.png"/>  
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Payment;
