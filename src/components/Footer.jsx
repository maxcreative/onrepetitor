import { footerData } from "../data";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="mt-8 py-7 container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
      <div className="mx-auto flex flex-col lg:flex-row md:justify-between justify-center   max-w-screen-xl">
        <div className="mb-8 lg:mb-0 flex flex-col   items-center md:items-start ">
           <img
            src="/assets/logowhite.png"
            
            className="mb-9"
            width="168"
            height="41"
          />  
          <div>
            <div style={{display:"flex", paddingBottom:"13px"}}>
              <img src="/assets/phone.png" style={{width:"33px", marginRight:"20px"}}/>
              <div>Tel: +994991111111</div>
            </div>

            <div style={{display:"flex", paddingBottom:"13px"}}>
              <img src="/assets/email.png"  style={{width:"35px", marginRight:"20px"}}/>
              <div>Email: destek@onrepetitor.com</div>
            </div>
          </div>

          <div style={{display:"flex"}}>
            <img src="/assets/fb.png" style={{width:"50px", height:"50px", marginRight:"10px"}}></img>
            <img src="/assets/instagram.png"  style={{width:"50px", height:"50px"}}></img>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 lg:mx-4  text-center lg:text-left">
            <h3 className="font-bold mb-4 ">Dərslər</h3>
            <ul>
              
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted h">
                     Blok İmtahanları
                     </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                      1-ci qrup
                      </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                      2-ci qrup
                      </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                      3-cü qrup
                      </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                      4-cü qrup
                      </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                     Buraxılış İmtahanları
                     </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/kurslar"} className="text-muted ">
                   9-cu sinif
                   </Link>
                 
              </li>
              <li className="mb-2">
                  
              <Link to={"/kurslar"} className="text-muted ">
                   10-cu sinif
                   </Link>
                 
              </li>
              <li className="mb-2">
                  
              <Link to={"/kurslar"} className="text-muted ">
                   11-cu sinif
                  </Link>
                 
              </li>
              
            </ul>
          </div>

          <div className="mb-8 lg:mb-0 lg:mx-4  text-center lg:text-left">
            <h3 className="font-bold mb-4 ">Biz Kimik</h3>
            <ul>
              
                <li className="mb-2">
                  
                <Link to={"/about"} className="text-muted ">
                      Haqqımızda
                    </Link>
                   
                </li>
                <li className="mb-2">
                  
                    <a href="" className="text-muted ">
                      Komanda
                    </a>
                   
                </li>
                <li className="mb-2">
                  
                    <Link to={"/news"} className="text-muted ">
                      Yeniliklər
                    </Link>
                   
                </li>
                <li className="mb-2">
                  
                <Link to={"/about"} className="text-muted ">
                    Karyera
                  </Link>
                 
              </li>
              
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 lg:mx-4  text-center lg:text-left">
            <h3 className="font-bold mb-4 ">Daima yeniliklərdən xəbərdar olmaq üçün</h3>
            <form style={{marginBottom:"50px"}}>
              <input type="text" placeholder="Email" style={{padding: "21px 98px 21px 36px", marginRight: "-108px", borderRadius: "20px"}} />
              <button style={{backgroundColor:"#07A169",borderRadius: "18px", padding: "16px 21px"}}> Göndər</button>
            </form>

            <div style={{display:"inline"}}>
              <img src="/assets/google.png" style={{marginRight:"10px",width:"155px",display:"inline"}}/>
              <img src="/assets/apple.png" style={{width:"155px",display:"inline"}}/>
            </div>
          </div>
      </div>
      
    </footer>
    <div className="desktopp container mx-auto border-t border-gray-200 pt-4 text-center">
        <div className="columns-2" style={{paddingLeft:"140px", paddingRight:"140px",paddingBottom:"30px", paddingTop:"10px"}}>
        <div style={{textAlign:'left'}}>2024 Bütün haqqları Onrepetitor tərəfindən qorunur</div>
        <div><img src="/assets/maxcreative.png" style={{width:"130px",marginLeft:"auto"}}></img></div>
        </div>
 </div>

 <div style={{display:"none"}} className="mobilee container mx-auto border-t border-gray-200 pt-4 text-center">
        <div className="" style={{paddingLeft:"40px", paddingRight:"40px",paddingBottom:"30px", paddingTop:"10px"}}>
        <div style={{textAlign:'center'}}>2024 Bütün haqqları Onrepetitor tərəfindən qorunur</div>
        <div><img src="/assets/maxcreative.png" style={{width:"130px",margin:"auto", marginTop:"20px"}}></img></div>
        </div>
 </div>
 </>
  );
};

export default Footer;
