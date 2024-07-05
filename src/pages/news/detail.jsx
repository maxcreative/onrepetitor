import React from 'react'
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { Link, NavLink } from "react-router-dom";
import "./news.css"

function About() {
  return (
    <>
    <Nav />
     
   <section className='breadcrumpsection' style={{padding:"50px 100px"}}>
   <div ><Link to={'/'} style={{textDecoration:"underline"}}>Ana Səhifə</Link><span style={{margin:"0 10px"}}>/</span><Link to={'/news'} style={{textDecoration:"underline"}}>Yeniliklər</Link><span style={{margin:"0 10px"}}>/</span><span>Azərbaycan təhsil bazarında yenilik</span></div>


    <div className='newstitle' style={{fontWeight:"600", fontSize:"30px", margin:"50px 0 7px 0",}}>Azərbaycan təhsil bazarında yenilik</div>
    <div style={{fontSize:"15px", marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
    
    <img src='/assets/newsdetail.png' />
    <div className='desktopp' style={{padding:"30px 250px", position:"relative"}}>
          <div style={{margin:"0px 0 20px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu eleifend erat. Maecenas dictum purus vel sollicitudin egestas. Vivamus sed metus quis nisl posuere condimentum. Sed enim justo, placerat a ipsum non, ornare congue est. Etiam egestas, diam ac finibus condimentum, quam metus porta eros, ac iaculis tortor nisl a eros. Integer sagittis purus vel nibh porttitor vulputate.</div>
          <img src='/assets/newsdetail2.png' />
          <div  style={{margin:"20px 0 20px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
    
          <div style={{position:"absolute",top: "33px",right: "0px",paddingRight: "184px"}} ><img src='/assets/social.svg' /></div>
    </div>


    <div className='mobilee' style={{display:"none",padding:"30px 20px", position:"relative"}}>
          <div style={{margin:"0px 0 20px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu eleifend erat. Maecenas dictum purus vel sollicitudin egestas. Vivamus sed metus quis nisl posuere condimentum. Sed enim justo, placerat a ipsum non, ornare congue est. Etiam egestas, diam ac finibus condimentum, quam metus porta eros, ac iaculis tortor nisl a eros. Integer sagittis purus vel nibh porttitor vulputate.</div>
          <img src='/assets/newsdetail2.png' />
          <div  style={{margin:"20px 0 20px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus metus magna, vel ullamcorper arcu sodales at. Quisque rhoncus neque non fermentum scelerisque. Nunc iaculis vel nisl in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
    
          <div style={{}} ><img src='/assets/social2.svg' /></div>
    </div>
    
    
   
   </section>
   

    <section className='desktopp' style={{background:"#F5FBF9",padding:"50px 100px"}}>
      <div style={{fontWeight:"600", fontSize:"28px", paddingLeft:"30px", marginBottom:"10px"}}>Digər yeniliklər</div>
      <div className='columns-3'>
          <div className=' newsComponent' style={{marginBottom:"30px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news1.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Özəl repetitorların dövrü <br/>bağlanır.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

          <div className=' newsComponent' style={{marginBottom:"30px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news2.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Onrepetitor-la övladlarınızı sıxmadan nəticələrini izləyəcəksiniz.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

          <div className=' newsComponent' style={{marginBottom:"30px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news3.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Başa düşmədiklərinizi hər səfərində təkraralaya biləcəksiniz</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

           

           

        
      </div>
    </section>


    <section className='mobilee' style={{background:"#F5FBF9",display:"none"}}>
    <div style={{fontWeight:"600", fontSize:"28px", paddingLeft:"30px",paddingTop:"20px", marginBottom:"10px"}}>Digər yeniliklər</div>
    <div className=' newsComponent' style={{marginBottom:"15px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news1.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Özəl repetitorların dövrü <br/>bağlanır.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

          <div className=' newsComponent' style={{marginBottom:"15px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news2.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Onrepetitor-la övladlarınızı sıxmadan nəticələrini izləyəcəksiniz.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

          <div className=' newsComponent' style={{marginBottom:"15px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news3.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Başa düşmədiklərinizi hər səfərində təkraralaya biləcəksiniz</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

           
    </section>
    <Footer />
    </>
  )
}

export default About