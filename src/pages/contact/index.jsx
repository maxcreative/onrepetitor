import React from 'react'
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import './contact.css'
import { Link, NavLink } from "react-router-dom";

import Accordion from "../../components/Accordion";
import { accordionData } from "../../utils/content";
function Contact() {
  return (
   <>
    <Nav />
     
    <section>
      <div className='aboutTop' style={{ textAlign:"center", padding:"60px 100px"}}>
        <div ><Link to={'/'} style={{textDecoration:"underline"}}>Ana Səhifə</Link><span style={{margin:"0 10px"}}>/</span><span>Bizimlə Əlaqə</span></div>

        <div style={{marginTop:"20px", fontSize:"25px", fontWeight:"600"}}>Daha parlaq gələcək üçün
        bizimlə əlaqə</div>

        <div className='aboutsubtext' style={{width: "50%", margin: "20px auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum dolor risus, non rutrum leo elementum malesuada. Phasellus rutrum dapibus velit, ut dignissim magna porta vel.</div>
      </div>
    </section>

    <section className='formMobile' style={{background:"#F5FBF9", padding:"100px 140px"}}>
      <div className='formxcdd' style={{display:"flex", justifyContent:"center"}}>
          <div className='formxx' style={{paddingTop:"30px", paddingRight:"50px"}}>
            <div>
                <div style={{display:"flex",marginBottom:"35px"}}><img style={{marginRight:"20px",width:"25px"}} src='/assets/emailgreen.svg'/><span style={{fontSize:"18px"}}>info@onrepetitor.com</span></div>
                <div style={{display:"flex",marginBottom:"35px"}}><img style={{marginRight:"20px",width:"25px"}} src='/assets/phonegreen.svg'/><span style={{fontSize:"18px"}}>+994 10 100 10 10</span></div>
                <div style={{display:"flex",marginBottom:"35px"}}><img style={{marginRight:"20px",width:"25px"}} src='/assets/pingreen.svg'/><span style={{fontSize:"18px"}}>Fuad İbrahimbəyov 18A</span></div>

                <img src='/assets/contactsocial.svg'/>
            </div>
             
          </div>
          <div>
            <div style={{background:"#fff", borderRadius:"10px", padding:"30px 30px"}}>
                <form>
                  <div>Ad Soyad</div>
                  <input type='text' style={{border: "1px solid #b4aeae85", borderRadius: "6px", width: "100%", height: "40px", margin: "10px 0 25px 0"}}/>
                  <div>Email</div>
                  <input type='text' style={{border: "1px solid #b4aeae85", borderRadius: "6px", width: "100%", height: "40px", margin: "10px 0 25px 0"}}/>
                  
                  <div>Mesajınız</div>
                  <input type='text' style={{border: "1px solid #b4aeae85", borderRadius: "6px", width: "100%", height: "40px", margin: "10px 0 25px 0"}}/>
                  
                  <button style={{background:"#45B88F", color:"#fff",width:"100%",padding:"12px", borderRadius:"5px"}}>Mesaj göndər</button>
                </form>
                <div></div>
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
  )
}

export default Contact