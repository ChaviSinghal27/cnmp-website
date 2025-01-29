import "./sections.css";
import heroimg from "../../Images/heroimg.svg";
import section2img1 from "../../Images/section2img1.svg";
import section2img2 from "../../Images/section2img2.svg";
import sec3img1 from "../../Images/sec3img1.svg";
import sec5cardimg1 from "../../Images/sec5cardimg1.svg";
import sec5cardimg2 from "../../Images/sec5cardimg2.svg";
import sec5cardimg3 from "../../Images/sec5cardimg3.svg";
import sec5cardimg4 from "../../Images/sec5cardimg4.svg";
import sec6img1 from "../../Images/sec6img1.svg";
import sec6img2 from "../../Images/sec6img2.svg";
import sec8img from "../../Images/sec8img.svg";
import sec9img1 from "../../Images/sec9img1.svg";
import sec10img from "../../Images/sec10img.svg";
import sec11cardimg1 from "../../Images/sec11cardimg1.svg";
import sec11cardimg2 from "../../Images/sec11cardimg2.svg";
import sec11cardimg3 from "../../Images/sec11cardimg3.svg";
import sec11cardimg4 from "../../Images/sec11cardimg4.svg";
import sec11cardimg5 from "../../Images/sec11cardimg5.svg";
import sec11img1 from "../../Images/sec11img1.svg";
import sec11img2 from "../../Images/sec11img2.svg";
import sec11img3 from "../../Images/sec11img3.svg";
import sec11img4 from "../../Images/sec11img4.svg";
import sec11img5 from "../../Images/sec11img5.svg";
import sec11img6 from "../../Images/sec11img6.svg";
import sec12img1 from "../../Images/sec12img1.svg";
import sec12img2 from "../../Images/sec12img2.svg";
import footerimg1 from "../../Images/footerimg1.svg";

export default function Sections() {
  return (
    <div>
      <section className=" section1 container-fluid p-5">
        <div className="row">
          <div className="col-sm-4 col-xs-12 ">
            <div className="text-start pt-5 section1-left ">
              <p>Welcome To</p>
              <h3>CNMP Investments Private Limited</h3>
              <p>Driving Financial Solutions for Your Business Growth</p>
            </div>
          </div>
          <div className="col-sm-8 col-xs-12 ">
            <img src={heroimg} />
          </div>
        </div>
        <p className="mt-5 text-start">
          At CNMP, we understand the challenges businesses face when accessing
          capital, especially mid-market enterprises looking to scale. Our goal
          is to bridge this gap by offering high-quality credit solutions and
          cutting-edge technology to empower businesses, even those without
          top-tier credit ratings.
        </p>
      </section>
      <section className="section2">
        <h3 className="pt-5">Key Highlights</h3>
        <div className="container-fluid pb-5">
          <div className="row">
            <div className=" d-flex justify-content-center col-sm-6 col-xs-12 ">
              <div className="section2-left rounded text-start border mt-5 p-3 ">
                <div className="sec2img-div">
                  <img src={section2img1} />
                </div>
                <h5 className="pt-3">Lending Solutions:</h5>
                <p>Digital Lending, Business Loans, Mid-market Lending</p>
              </div>
            </div>
            <div className=" d-flex justify-content-center  col-sm-6 col-xs-12 ">
              <div className=" rounded mt-5 section2-right border p-3 text-start">
                <div className="sec2img-div">
                  <img src={section2img2} />
                </div>
                <h5 className="pt-3">Serving Sectors:</h5>
                <p>
                  Mid-Corporates, Large Corporations, Small Medium Enterprises,
                  Retail NBFCs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3" id="section3">
        <div className="p-5">
          <h3>We Go To The Maximum To Maximise Your Potential</h3>
          <h4 className="mt-5"> Apply For Your Loan Today</h4>
          <div className=" sec3-div mt-5 d-flex justify-content-center">
            <p className=" sec3-border pe-3">Fast</p>

            <p className="  sec3-border ps-3 pe-3">Efficient</p>

            <p className="ps-3">Digital</p>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.abhicash.abhicash&hl=en">
            <button className="  mt-5 p-2 rounded mb-2">Apply Now</button>
          </a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-5 mb-5">
              <img src={sec3img1} />
            </div>
            <div className="col-sm-12 col-lg-7">
              <div className="p-5 text-start">
                <h3>Get To Know Us</h3>
                <p>
                  C N M P Investments Private Limited has been a trusted
                  financial partner since its establishment in 1983. With over
                  three decades of experience, we specialize in offering
                  innovative and customized financial solutions to support the
                  growth of businesses across various industries. Our commitment
                  to providing seamless access to capital has positioned us as a
                  key player in the lending sector, empowering enterprises to
                  achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4 pb-5 pt-5">
        <div className="p-5 d-flex justify-content-center">
          <div>
            <h3 className="pb-3">How We Have Grown</h3>
            <p className="text-start">
              Founded with the vision of bridging the gap between businesses and
              the capital
              <br />
              they need, C N M P has continually evolved to meet the changing
              demands of the financial landscape. Today, we
              <br />
              offer a wide array of financial products tailored to mid-market
              enterprises, SMEs, and large corporations.
            </p>
          </div>
        </div>
      </section>
      <section className="section5">
        <div>
          <div className="bg-img d-none d-sm-block">
            <h3 className="sec5-heading">What We Stand For</h3>
            <div className="row d-flex justify-content-center sec5-cards">
              <div className=" mt-3 col-xs-12 col-sm-3 card text-start">
                <img src={sec5cardimg1} />
                <h3>INNOVATION</h3>
                <p>
                  We create cutting-edge financial products to cater to evolving
                  business needs
                </p>
              </div>
              <div className="col-xs-12 col-sm-3 card text-start mt-3">
                <img src={sec5cardimg2} />
                <h3>INTEGRITY</h3>
                <p>
                  Transparency and ethical practices are at the heart of
                  everything we do
                </p>
              </div>
              <div className="col--xs-12 col-sm-3 card text-start  mt-3">
                <img src={sec5cardimg3} />
                <h3>CUSTOMER-CENTRICITY</h3>
                <p>
                  We put our clients first, offering personalized solutions that
                  align with their goal
                </p>
              </div>
              <div className="col-xs-12 col-sm-3 card text-start  mt-3">
                <img src={sec5cardimg4} />
                <h3>EFFICIENCY</h3>
                <p>
                  Our processes are designed to ensure quick, hassle-free
                  financing with a focus on speed and accuracy
                </p>
              </div>
            </div>
          </div>
          <div className="d-block d-sm-none">
            <div className="container-fluid">
              <h3 className="mt-5">WHAT WE STAND FOR</h3>
              <div className="row d-flex justify-content-center ">
                <div className=" sec5-card1 col-xs-12 col-sm-12 card text-start">
                  <img src={sec5cardimg1} />
                  <h3>INNOVATION</h3>
                  <p>
                    We create cutting-edge financial products to cater to
                    evolving business needsf
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 card text-start mt-3 mb-2">
                  <img src={sec5cardimg2} />
                  <h3>INTEGRITY</h3>
                  <p>
                    Transparency and ethical practices are at the heart of
                    everything we do
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 card text-start  mt-3 mb-2">
                  <img src={sec5cardimg3} />
                  <h3>CUSTOMER-CENTRICITY</h3>
                  <p>
                    We put our clients first, offering personalized solutions
                    that align with their goal
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 card text-start  mt-3 mb-2">
                  <img src={sec5cardimg4} />
                  <h3>EFFICIENCY</h3>
                  <p>
                    Our processes are designed to ensure quick, hassle-free
                    financing with a focus on speed and accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section6 pt-5">
        <div className="container " style={{}}>
          <div className="row">
            <div className="col-sm-6 col-xs-12 " style={{ marginTop: "50px" }}>
              <img src={sec6img1} className="sec6-img" />
            </div>
            <div className="col-sm-6 col-xs-12" style={{ marginTop: "150px" }}>
              <div className="text-start" style={{ marginLeft: "20px" }}>
                <h3 className="mb-3">Vision for the future</h3>
                <h6
                  className="text-muted"
                  style={{ fontWeight: "400", fontSize: "larger" }}
                >
                  To be India’s most trusted and efficient financial service
                  provider, enabling businesses to access the capital they need
                  to thrive.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12" style={{ marginTop: "150px" }}>
              <div style={{ marginLeft: "20px" }}>
                <h3 className="text-start  ">What We Aim To Achieve</h3>
                <h6
                  className="text-start text-muted"
                  style={{ fontWeight: "400", fontSize: "larger" }}
                >
                  To fuel the growth of 5,000+ enterprises by offering quick and
                  customized financial solutions, with a target credit flow of
                  ₹1 trillion by FY 26.
                </h6>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12" style={{ marginTop: "50px" }}>
              <img src={sec6img2} className="sec6-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section7">
        <div className="d-flex justify-content-center">
          <figure className="ps-5">
            <blockquote className="blockquote mt-5">
              <h3>Company Information</h3>
            </blockquote>
            <div className="text-start mt-5">
              <figcaption
                className="blockquote-footer"
                style={{ color: "white" }}
              >
                Corporate Identification Number (CIN): U74899DL1983PTC016061
              </figcaption>
              <figcaption
                style={{ color: "white" }}
                className="blockquote-footer"
              >
                Registration Number: 16061  
              </figcaption>
              <figcaption
                style={{ color: "white" }}
                className="blockquote-footer"
              >
                Date of Incorporation: 4th July 1983
              </figcaption>
              <figcaption
                style={{ color: "white" }}
                className="blockquote-footer"
              >
                Company Type: Private, Non-Government
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
      <section className="section8" id="section8">
        <div className="d-flex flex-column  justify-content-center align-item-center pt-5 pe-5 ps-5">
          <div>
            <h3>Board of Directors</h3>
            <p>
              Meet Our Leadership Team. Our board of directors consists of
              experienced professionals who are deeply committed to providing
              the highest quality financial services.
            </p>
          </div>
          <div className="mt-5 container-fluid">
            <div className="row">
              <div className="col-sm-6 col-xs-12 d-flex justify-content-center mb-5">
                <div className="card sec8-card">
                  <div class="row ">
                    <div class=" pt-5 pb-3 col-md-8 border-end">
                      <div class="card-body text-start ps-5">
                        <h5 class="card-title">Rohit Mehta</h5>
                        <p class="card-text">Director</p>
                        <p class="card-text">
                          Rohit brings over 30 years of experience in financial
                          services, leading CNMP to new heights with strategic
                          innovation
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-center pb-5 ">
                      <img src={sec8img} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12 d-flex justify-content-center mb-5">
                <div className="card sec8-card">
                  <div class="row ">
                    <div class=" pt-5 pb-3 col-md-8 border-end">
                      <div class="card-body text-start ps-5">
                        <h5 class="card-title">Karan Mehta</h5>
                        <p class="card-text">Director</p>
                        <p class="card-text">
                          Karan specializes in corporate finance, focusing on
                          innovation and driving growth for the company
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-center pb-5 ">
                      <img src={sec8img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 p-3">
            <h3>Lending Services</h3>
            <p>
              Lending Solutions for Mid-market Lending We specialize in
              customized lending solutions tailored to the unique needs of
              businesses, whether they are mid-sized companies or large
              corporations.
            </p>
            <p>Our Lending Solutions Include:</p>
          </div>
        </div>
      </section>
      <section className="section9" id="section9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-xs-12 p-5">
              <img src={sec9img1} />
            </div>
            <div className="sec9-right col-sm-6 col-xs-12 text-start">
              <h3 className="ps-5">DigitaL Lending</h3>
              <p className="ps-5 pe-3" style={{ color: "white" }}>
                Fast and efficient loans with a fully digital application <br />
                process, designed for both individuals and businesses
              </p>
              <div className="row sec9-card">
                <div className="sec9-card1 col-sm col-xs-12 d-flex flex-column text-start card mt-5 ps-5 pe-5 pt-5">
                  <h3>Key Features</h3>
                  <p>Quick online application</p>
                  <p>Instant approval</p>
                  <p>Flexible repayment options</p>
                  <p>Minimal documentation</p>
                </div>
                <div className="col-sm col-xs-12 d-flex flex-column text-start card mt-5 p-5">
                  <h3>Domains</h3>
                  <p>Quick online application</p>
                  <p>Retail NBFC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec9-bottom p-5"></div>
      </section>
      <section className="section10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 col-xs-12">
              <div className="sec10-left">
                <div className=" row text-start mb-3 mt-5 ms-5">
                  <h3>Business Loans</h3>
                  <p>
                    Financing for Mid-Corporates, Large Corporations, and SMEs,
                    <br />
                    helping businesses grow and achieve their full potential.
                  </p>
                </div>
                <div className="sec10-card">
                  <div className="row">
                    <div className=" sec10-card1 card col-sm-4 col-xs-12 mt-3 mb-3  p-4 text-start">
                      <h3 className=" mb-3">Key Features</h3>
                      <p>customizable loan term</p>
                      <p>Competitive interest rates</p>
                      <p>Tailored financial solutions</p>
                    </div>
                    <div className="col-sm-4 col-xs-12 card mt-3 mb-3 p-4  text-start d-flex flex-column ">
                      <h3>Domains</h3>
                      <p>Mid-Corporates</p>
                      <p>Large Corporations</p>
                      <p>Small Enterprises</p>
                      <p>Retail Sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 p-5 mb-5">
              <img src={sec10img} />
            </div>
          </div>
        </div>
      </section>
      <section className="section11 pt-5" id="section11">
        <div className="pt-5  container-fluid">
          <div className="row pt-5 ">
            <div className="col-sm col-xs-12 ">
              <div className=" sec11-col1 text-start p-5">
                <h3> Why CNMP Stands Out</h3>
                <p>
                  We believe in building long-term partnerships with our clients
                  by providing not just financial support but also strategic
                  guidance. Here's why CNMP is the right choice for your
                  business
                </p>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="sec11-card card  p-5 text-start">
                <div className="sec11img-div">
                  <img src={sec11cardimg1} />
                </div>
                <div>
                  <h3>Customer Centric Approach</h3>
                  <p>
                    We understand the specific needs of your business and offer
                    tailored financial products to suit your goals
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="sec11-card card  text-start p-5">
                <div className="sec11img-div">
                  <img src={sec11cardimg2} />
                </div>
                <h3>Rapid Turnaround</h3>
                <p>
                  We provide quick loan approvals and fast access to funds, with
                  a turnaround time of under 10 days
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-xs-12">
              <div className="sec11-card card  text-start p-5">
                <div className="sec11img-div">
                  <img src={sec11cardimg3} />
                </div>
                <h3>Diverse Product Portfolio</h3>
                <p>
                  Our broad range of financial solutions ensures that you have
                  the flexibility to choose the best product for your needs.
                </p>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="sec11-card card  text-start p-5">
                <div className="sec11img-div">
                  <img src={sec11cardimg4} />
                </div>
                <h3>Tech-Driven processes</h3>
                <p>
                  We leverage cutting-edge digital technology to make your
                  lending experience smooth and
                  <br />
                  hassle-free
                </p>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="sec11-card card  text-start p-5">
                <div className="sec11img-div">
                  <img src={sec11cardimg5} />
                </div>
                <h3>Ongoing support</h3>
                <p>
                  We believe in continuous engagement, ensuring that our
                  relationship goes beyond just financing. Our team is always
                  available to assist with your evolving business needs
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="section11-bottom">
            <div className="mt-5">
              <h3>CNMP Advantages</h3>
              <p>Get Ahead of the pack with CNMP's Unique Advantage </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-xs-12">
              <div className="text-start ps-5 m-5">
                <div className="sec11-bottom d-flex justify-content-center">
                  <img src={sec11img1} />
                </div>
                <div>
                  <h3>Access to Capital</h3>
                  <p>
                    Flexible financing solutions for businesses of all sizes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="text-start ps-5 m-5">
                <div className="sec11-bottom d-flex justify-content-center">
                  <img src={sec11img2} />
                </div>
                <div>
                  <h3>Focused on Growth</h3>
                  <p>
                    Customer-centric products designed to accelerate business
                    expansion
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm col-xs-12">
              <div className="text-start ps-5 m-5">
                <div className="sec11-bottom d-flex justify-content-center">
                  <img src={sec11img3} />
                </div>
                <div>
                  <h3>Fast Loan Processing</h3>
                  <p>
                    Efficient processes that get you the funds you need quickly
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-xs-12">
              <div className="text-start ps-5 m-5">
                <div className="sec11-bottom d-flex justify-content-center">
                  <img src={sec11img4} />
                </div>
                <div>
                  <h3>Innovative Lending Products</h3>
                  <p>Tailor-made solutions to match your specific needs</p>
                </div>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="text-start ps-5 m-5">
                <div className="sec11-bottom d-flex justify-content-center ">
                  <img src={sec11img5} />
                </div>
                <div>
                  <h3>Digital-First Approach</h3>
                  <p>
                    Seamless digital platforms for easy loan applications and
                    management
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm col-xs-12">
              <div>
                <div className="text-start ps-5 m-5">
                  <div className="sec11-bottom d-flex justify-content-center">
                    <img src={sec11img6} />
                  </div>
                  <div>
                    <h3>Sector Expertise</h3>
                    <p>
                      Specialist knowledge in mid-market, large corporate, and
                      retail financing
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section12 pt-5 pb-5">
        <div className="sec12-main p-5 pb-0 m-5 rounded ">
          <div className="row">
            <h3>Our Sourcing Partner</h3>
            <p>
              We’ve made accessing loans easier than ever with our Lending Apps.
              Manage your loan applications, track progress, and stay
              updated—all from your smartphone.
            </p>
          </div>
          <div className="row">
            <div className="col-sm col-xs-12 d-flex justify-content-center align-items-center">
              <div className="sec12-left my-5">
                <div className="card d-flex flex-column justify-content-center align-items-center px-5 py-3">
                  <img
                    src={sec12img2}
                    style={{ width: "60%" }}
                    className="sec12-img pt-4"
                  />
                  <h1 className="" style={{ color: "#344EAD" }}>
                    Abhi Cash
                  </h1>
                  <p style={{ color: "#344EAD" }}>
                    Instant loans, simplifying your life
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="text-start mt-5">
                <h3>Key Features Of Our App</h3>
                <p>
                  <span>
                    <img src={sec12img1} /> Easy online loan application
                  </span>
                </p>
                <p>
                  <span>
                    <img src={sec12img1} />
                    Real-time status update
                  </span>
                </p>
                <p>
                  <span>
                    <img src={sec12img1} /> Secure, user-friendly interface
                  </span>
                </p>
                <p>
                  <span>
                    <img src={sec12img1} /> Available for both Android and iOS
                  </span>
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.abhicash.abhicash&hl=en">
                  <button className="p-2 rounded mb-3">Download Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer rounded-top" id="footer">
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-sm col-xs-12">
              <div className="text-start">
                <img src={footerimg1} />
                <p className="pt-5 pe-3 ">
                  Let’s Connect! If you have any questions or require
                  assistance, feel free to reach out to us.
                </p>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="text-start d-flex flex-column ">
                <h3>Company</h3>
                <a className="pb-3 pt-3" href="#section3">
                  Get To Know Us
                </a>
                <a className="pb-3" href="#section8">
                  Board Of Directors
                </a>
                <a className="pb-3" href="#section9">
                  Lending Services{" "}
                </a>
                <a className="pb-3" href="#section11">
                  Why CNMP stand Out
                </a>
                <a className="pb-3" href="#section11-bottom">
                  CNMP Advantages
                </a>
              </div>
            </div>
            <div className="col-sm col-xs-12">
              <div className="text-start">
                <h3>Contact us</h3>
                <p className="pb-3 pt-3">
                  <i
                    class="fa-regular fa-envelope"
                    style={{ color: "#fafafa" }}
                  ></i>{" "}
                  Email: csharvinder@akasafin.com
                </p>
                <p className="pb-3">
                  <i
                    class="fa-solid fa-location-dot"
                    style={{ color: "#fafafa" }}
                  ></i>{" "}
                  Registered Address: 70/A-32,
                  <br /> Rama Road Industrial Area, Najafgarh
                  <br />
                  Road,New Delhi, Delhi, India - 110015
                </p>
                <p className="pb-3">
                  <i
                    class="fa-solid fa-phone-volume"
                    style={{ color: "#fafafa" }}
                  ></i>{" "}
                  phone: +919999999999
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-mid"></div>
          </div>
          <div className="row pt-3 pb-3 text-center">
            <p>
              {" "}
              © 2024 C N M P Investments Private Limited. All rights reserved. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
