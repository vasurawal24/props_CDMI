
import './App.css';
import { IoIosMail, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosQuote } from "react-icons/io";
import { FaCertificate, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaAngleDown, FaChalkboardTeacher } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { PiStudentFill, PiPencilSimpleLineFill, PiNotePencil, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";

import {
  FaRegCopyright,
  FaHandPointRight,
  FaUniversity,
} from "react-icons/fa";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { TiSocialGooglePlus } from "react-icons/ti";
// import {
//   VscStarFull,
//   VscStarHalf,
//   VscArrowRight,
//   VscChevronLeft,
//   VscChevronRight,
// } from "react-icons/vsc";

import img1 from './image/logo.svg';
import img0 from './image/creative-logo-white.svg'
import img2 from './image/i11.jpg';
import img3 from './image/i4.jpg';
import img4 from './image/i5.jpg';
import img5 from './image/i6.jpg';
import img6 from './image/i7.jpg';
import img7 from './image/i8.jpg';
import img8 from './image/i3.jpg';
import img9 from './image/i1.jpg';
import img10 from './image/i10.jpg'
import img12 from './image/i9.jpg';
import img13 from './image/i10.jpg';
import img14 from './image/i14.png';
import b1 from "./image/if.png";
import b2 from "./image/if1.png";
import b3 from "./image/if3.png";
import b4 from "./image/if4.png";
import b5 from "./image/if5.png";
import b6 from "./image/if6.png";
import c1 from "./image/asset 44.png";
import c2 from "./image/asset 45.png";
import c3 from "./image/asset 46.png";
import c4 from "./image/asset 47.png";
import c5 from "./image/asset 48.png";
import c6 from "./image/asset 49.png";

var menu = ['HOME', 'COURSE', 'ACTIVITIES', 'BLOG', 'KNOWN US', 'GET IN TOUCH', 'STUDENT ZONE'];

var slider = [
  { image: require('./image/s3.webp') },
  { image: require('./image/s4.webp') },
  { image: require('./image/s5.webp') },
  { image: require('./image/s6.jpg') },
  { image: require('./image/s7.webp') },
  { image: require('./image/s8.webp') },
  { image: require('./image/s9.webp') },
  { image: require('./image/s10.webp') },
  { image: require('./image/s11.webp') },
]

var course = [
  { image: require('./image/i3.jpg'), name: "Development course" },
  { image: require('./image/i4.jpg'), name: "Design Courses" }, -
  { image: require('./image/i5.jpg'), name: "Programming IT" },
  { image: require('./image/i6.jpg'), name: "Trendy Courses" },
  { image: require('./image/i7.jpg'), name: "Civil-Mech. Engineering" },
  { image: require('./image/i8.jpg'), name: "Business Development" },
]

var no = [
  { icon: <PiNotePencil />, num: "14000+", name: "HAPPY STUDENT" },
  { icon: <PiChalkboardTeacherFill />, num: "10+", name: "CERTIFICATION APPROVAL" },
  { icon: <PiStudentFill />, num: "100+", name: "CERTIFIED TEACHERS" },
  { icon: <PiEnvelopeOpenFill />, num: "12000+", name: "STUDENTS PLACED" },
]
var choose = [
  { image: require('./image/if.png'), head: "Industry Expert As Trainers", para: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
  { image: require('./image/if1.png'), head: "Latest Curriculum", para: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.." },
  { image: require('./image/if3.png'), head: "Latest Technology", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },
  { image: require('./image/if4.png'), head: "Interview Assistance", para: "We will be provided free upgradation for any newer version of the course you have." },
  { image: require('./image/if5.png'), head: "Free Upgradation", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },
  { image: require('./image/if6.png'), head: "Lifetime Support", para: "We will provide you lifetime support on all the courses you learned from us." },
]
var slider_std = [
  { image: require("./image/asset 44.png") },
  { image: require("./image/asset 44.png") },
  { image: require("./image/asset 45.png") },
  { image: require("./image/asset 46.png") },
  { image: require("./image/asset 47.png") },
  { image: require("./image/asset 48.png") },
  { image: require("./image/asset 49.png") },
  { image: require("./image/asset 44.png") },
  { image: require("./image/asset 45.png") },


]
var demand = ['Lumion training institute in varachha', 'nodejs training institute in Mota Varachha', 'best php training in katargam', 'python training institute in surat', 'Live game development training institute', 'Illustrator training in katargam', 'Tally accounting training institute', 'Unity 3d training institute in katargam', '3d game development training institute in Mota Varachha', 'Adobe xd design course', 'Lumion training institute in katargam', 'Video Editing Training in Surat', 'Web design training in varachha', 'Android training institute in varachha', 'C++ programming language course', 'python training institute in varachha', 'Web development training institute in varachha', 'PHP project company in surat', 'ios app training institute in varachha', 'Maya 3d animation training institute in surat']

function App() {
  const newLocal = "img-part d-f a-i-c j-c-s-b";
  return (
    <div>
      <div className="topinfo">
        <div className="container">
          <div className="headr d-flex">
            <div className="leftinfo d-flex">
              <i><IoIosMail></IoIosMail></i><a>info@cdmi.in</a>
              <i><FaCertificate></FaCertificate></i><a>Verify certificate</a>
            </div>
            
            <div className="ceninfo"><a>HAVE ANY QUESTION ? +91 90333 16003</a></div>
            <div className="rightinfo d-flex">
              <li><a><FaFacebook></FaFacebook></a></li>
              <li><a><FaTwitter></FaTwitter></a></li>
              <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
              <li><a><FaLinkedin></FaLinkedin></a></li>
              <li><a><FaInstagram></FaInstagram></a></li>
              <li><a><FaYoutube ></FaYoutube></a></li>
              <li><a><FaWhatsapp ></FaWhatsapp></a></li>
            </div>
          </div>
        </div>
      </div>

      <header >
        <div className="container d-flex">
          <div className="logo">
            <img src={img1}></img>
          </div>
          <div className="menu">
            <ul className='main-menu d-flex'>
              {
                menu.map((ele, ind) => {
                  return (
                    <li><a key={ind}>{ele}</a></li>
                    
                  )
                })
              }
            </ul>
          </div>
        </div>
      </header>

      {/* slider start */}

      <OwlCarousel className='owl-theme slider1' loop margin={10} nav={false} items={1} dots={false} autoplay={true} autoplayTimeout={3000}>
        {
          slider.map((ele, ind) => {
            return (
              <div class='item'>
                <img src={ele.image}></img>
              </div>
            )
          })
        }
      </OwlCarousel>

      {/* slider end */}

      {/* CREATIVE COURSE satrt  */}

      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          {
            course.map((ele, ind) => {
              return (
                <div className='w-33'>
                  <div className='content'>
                    <img src={ele.image}></img>
                    <h2>{ele.name}</h2>
                    <hr></hr>
                    <div className='d-flex course-bottom'>
                      <div className='social'>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStarHalf></IoMdStarHalf>
                      </div>

                      <div className='course-btn'>
                        <button><a href=''>Know More...!</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE end */}

      {/* about us start */}
      <div className="pd-y d-flex about-content">
        <div className='about'>
          <div className='content'>
            <p className='about-head'>About Us
              <div className='line'></div>
            </p>
            <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
            <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
              institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
              types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
              in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
              or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
              hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <button className='about-btn'><a href=''>Enroll Now...! → </a></button>
          </div>
        </div>
        <div className='about-img'>
          <img src={img9}></img>
        </div>
      </div>
      {/* about us end */}



      <div className='pd-y count'>

        <div className='bacimg' style={{
          width: '100%',
          height: '230px',
          backgroundImage: 'url(${img10})',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <div className='container'>
            <div className='d-flex content'>
              {
                no.map((ele, ind) => {
                  return (
                    <div >
                      <i className='icon'>{ele.icon}</i>
                      <h1>{ele.num}</h1>
                      <h2>{ele.name}</h2>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>

      {/* COUNTING END */}

      <div className='container pd-y'>

        <div className='d-flex'>
          <div className='w-50 happy'>
            <p className='happy-head'>Happy Students
              <div className='line'></div>
            </p>
            <h1>Alumni Speak</h1>
            <PiQuotesFill className='happy-icon'></PiQuotesFill>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy-bottom d-flex'>
              <img src={img12}></img>
              <div className='bottom-con'>
                <h3>Goti Shruti</h3>
                <h5><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>
              </div>
            </div>
          </div>

          <div className='w-50 happy-img'>
            <div style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${img13})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <div className='happy1'>
                <img src={img14}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}

      {/* why chouce start    */}
      {/* <div className='bc'>
        <div className='pd-y container why'>
          <p className='course-head'>Read our diffreace
            <div className='line'></div>
          </p>
          <h1>WHY CHOOSE CREATIVE</h1>

        </div>
      </div>
      <div className='part '>
        <div className='backc container'>
          <div className='card w-33'>
            <div className='im'>
              <img src={img15} className='imgl'></img>
              <div className='be'></div>
            </div>
          </div>
          <div className='card w-33'></div>
          <div className='card w-33'></div>
        </div>
        <div className='backc container'>
          <div className='card w-33'></div>
          <div className='card w-33'></div>
          <div className='card w-33'></div>
        </div>
      </div> */}

      {/* why chouce end    */}

      <div className="main-part-9">
        <div className="container d-f f-d-c">
          <div className="line1 d-f a-i-c f-d-c" style={{ paddingTop: '50px' }}>
            <span className="sm-li3">READ OUR DIFFERENCE</span>
            <h1>WHY CHOOSE CREATIVE</h1>
          </div>
          <div className="line2 d-f f-w-w" style={{ padding: "50px 0" }}>
            {
              choose.map((ele, ind) => {
                return (
                  <div className="box d-f f-d-c a-i-c j-c-s-e w-33">
                    <div
                      className="img-part d-f a-i-c j-c-s-b "
                      style={{ height: "50%" }}
                    >
                      <div className="circal" style={{ backgroundColor: "#F6475F" }}>
                        <img src={ele.image} />
                      </div>
                    </div>
                    <h2>{ele.head}</h2>
                    <div
                      className="data"
                      style={{ padding: "10px 30px", textAlign: "center" }}
                    >
                      {ele.para}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='student'>
        <p className='student-head ps-3'>Student Placement
          <div className='line'></div>
        </p>
        <h1>Our Recruitment Partners</h1>

        <OwlCarousel className='owl-theme std-img' loop margin={25} nav={false} items={6} dots={false} autoplay={true} autoplayTimeout={3000}>
          {
            slider_std.map((ele, ind) => {
              return (
                <div class='item' className='std'>
                  <img src={ele.image}></img>
                </div>
              )
            })
          }
        </OwlCarousel>
      </div>
      <div className="main-part-11">
        <div className="container">
          <div className="part1">
            <h2>Our Demanded Course -</h2>
          </div>
          <div className="part2">
            {
              demand.map((ele, ind) => {
                return (
                  <a href=''>{ele}</a>
                )
              })
            }
            <br />
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: "#072054" }}>
        <div className="main-part-12">
          <div className="container d-f">
            <div className="part1">
              <div className="img" width={"100%"}>
                <img src={img0} alt="" width={"55%"} />
              </div>
              <div className="des" style={{ padding: '10px 25px 10px 0', textAlign: 'justify', lineHeight: '1.5' }}>
                Creative Design and Multimedia Institute is leading computer
                training institute in surat. We offers government approved
                computer training courses in Surat.
              </div>
              <h3 className="co-go" style={{ padding: '10px 0' }}><a className='ya'>FOLLOW US ON</a></h3>
              <div className="social-icon">
                <a href="" style={{ padding: "4px" }}>
                  <FaFacebook />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaTwitter />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <TiSocialGooglePlus />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaLinkedin />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaInstagram />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaYoutube />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="part2">
              <h3>FEATURE LINKS</h3>
              <ul style={{ padding: '15px 0' }}>
                <li><a href=""><FaHandPointRight className="m-l" />About Us</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Blogs</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Join Us</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Company Login</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Certificate Verification</a></li>
              </ul>
            </div>
            <div className="part3">
              <h3>CONTACT US</h3>
              <span style={{ padding: '15px 0', display: 'inline-block' }}><a href="" className="co-go ya">HEAD OFFICE - YOGICHOWK</a></span>
              <p style={{ lineHeight: '1.5' }}>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p>Mo :<a href="" className="co-go ya"> +90333 16003</a></p>
              <span style={{ padding: '15px 0 5px 0', display: 'inline-block' }}><a href="" className="co-go ya">OTHER BRANCHES</a></span>
              <ul>
                <li><a href=""><FaUniversity className="m-l" />Katargam</a></li>
                <li><a href=""><FaUniversity className="m-l" />Mota Varachha</a></li>
                <li><a href=""><FaUniversity className="m-l" />Adajan</a></li>
                <li><a href=""><FaUniversity className="m-l" />Navsari</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="container d-f a-i-c"
          style={{ backgroundColor: "#072044", padding: "25px 0" }}
        >
          <FaRegCopyright style={{ padding: "2px", marginRight: "3px" }} />
          <span>
            {" "}
            2023 All Rights Reserved by Creative Design & Multimedia Institute.
          </span>
        </div>
      </footer>




    </div>
  )
}
export default App;
