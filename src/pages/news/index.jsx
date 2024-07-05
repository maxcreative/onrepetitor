import React from 'react'
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import './news.css'
import { Link, NavLink } from "react-router-dom";

function About() {
  return (
    <>
    <Nav />
     
    
    
    <section>
      <div style={{background:"#F5FBF9", textAlign:"center", padding:"60px 100px"}}>
        <div ><Link to={'/'} style={{textDecoration:"underline"}}>Ana Səhifə</Link><span style={{margin:"0 10px"}}>/</span><span>Yeniliklər</span></div>

        <div style={{marginTop:"20px", fontSize:"25px", fontWeight:"600"}}>Yeniliklər</div>
      </div>
    </section>

    <section className='desktopp' style={{padding:"50px 140px"}}>
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

          <div className=' newsComponent' style={{marginBottom:"30px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news4.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Azərbaycan təhsil bazarında <br/>yenilik</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

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
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Özəl repetitorların dövrü bağlanır.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>  

        
      </div>
    </section>


    <section className='mobilee' style={{display:"none"}}>
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

          <div className=' newsComponent' style={{marginBottom:"15px",padding:"30px 30px"}}>
            <div><Link to={'/news/1'}> <img src='/assets/news4.png' /></Link></div>

            <div style={{marginTop:"10px"}}>1 May 2024</div>
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Azərbaycan təhsil bazarında <br/>yenilik</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>

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
            <div style={{fontSize:"17px", fontWeight:"600", margin:"10px 0px"}}>Özəl repetitorların dövrü bağlanır.</div>
            <div style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div style={{textAlign:"right", marginTop:"20px"}}><button style={{background:"#07A169", padding:"6px 15px", color:"#fff", borderRadius:"10px"}}>Ətraflı</button></div>
          </div>  
    </section>
    <Footer />
    </>
  )
}

export default About