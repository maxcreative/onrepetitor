import React from 'react'
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

import './admin.css'
import { Link, NavLink } from "react-router-dom";


function Dashboard() {
  return (
    <>
    <Nav />
     
    <section>
      <div className='aboutTop' style={{ textAlign:"center", padding:"60px 100px"}}>
        <div ><Link to={'/'} style={{textDecoration:"underline"}}>Ana Səhifə</Link><span style={{margin:"0 10px"}}>/</span><span>Haqqımızda</span></div>

        <div style={{marginTop:"20px", fontSize:"25px", fontWeight:"600"}}>Gələcəyinizi müəyyənləşdirmək
        bacarıqlarınızı artırmaqla başlayır</div>

        <div className='aboutsubtext' style={{width: "50%", margin: "20px auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum dolor risus, non rutrum leo elementum malesuada. Phasellus rutrum dapibus velit, ut dignissim magna porta vel.</div>
      </div>
    </section>

    <section className='aboutTextSection' style={{background:"#F5FBF9",padding:"100px 140px"}}>
      <div className='columns-2 aboutColumns'>
        <div><p className='aboutP' style={{paddingRight:"30px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu eleifend erat. Maecenas dictum purus vel sollicitudin egestas. Vivamus sed metus quis nisl posuere condimentum. Sed enim justo, placerat a ipsum non, ornare congue est. Etiam egestas, diam ac finibus condimentum, quam metus porta eros, ac iaculis tortor nisl a eros. Integer sagittis purus vel nibh porttitor vulputate.
        <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu eleifend erat.</p></div>
        <div><img src='/assets/about.png'/></div>

      </div>
    </section>

    <section className='aboutTextSection' style={{padding:"40px 140px"}}>
      <div>
      <h1 className="title1">Dəyərlərimiz</h1>
          <p className="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
      </div>
      <div className='columns-3 aboutColumns  '>
      <div style={{borderRadius:"10px", margin:"0 20px",background:"#F2FFF1", padding:"40px 40px", textAlign:"center"}}>
            <img style={{margin:"20px auto 30px auto"}} src='/assets/deyer1.svg' />
            <div style={{fontWeight:"500", fontSize:"20px"}}>Etdiyiniz iş üçün əlinizdən gələni edin.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada pharetra eros, ac rhoncus enim semper id.</div>
          </div>
          <div style={{borderRadius:"10px", margin:"20px",background:"#F2FFF1", padding:"40px 40px", textAlign:"center"}}>
            <img style={{margin:"20px auto 30px auto"}} src='/assets/deyer2.svg' />
            <div style={{fontWeight:"500", fontSize:"20px"}}>Texnologiyanın və elmin gücünə inanın.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada pharetra eros, ac rhoncus enim semper id.</div>
          </div>

          <div style={{borderRadius:"10px", margin:"20px",background:"#F2FFF1", padding:"40px 40px", textAlign:"center"}}>
            <img style={{margin:"20px auto 30px auto"}} src='/assets/deyer3.svg' />
            <div style={{fontWeight:"500", fontSize:"20px"}}>Ölkəniz və millətiniz üçün faydalı olun.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada pharetra eros, ac rhoncus enim semper id.</div>
          </div>

          

         
      </div>
    </section>


    <section className='aboutTextSection'  style={{padding:"40px 140px"}}>
      <div className='columns-2 aboutColumns'>
        <div>
            <div style={{fontWeight:"600",fontSize:"30px"}}>Komandamıza qoşulun</div>
            <div className='joinText' style={{padding:"40px 140px 20px 0px"}}>Biz komandamıza yüksək ixtisaslı, multikultural mühitdə bütün potensiallarını inkişaf etdirməyə və həm peşəkar, həm də insan kimi böyüməyə imkan verən fərdiləşdirilmiş karyera planları təklif edirik.</div>
          <button  style={{background:"#07A169", padding:"9px 25px", color:"#fff", borderRadius:"10px"}}>CV GÖNDƏR</button>
        </div>
        <div className='joinImage'><img style={{width:"500px"}} src='/assets/join.png'/></div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Dashboard