"use client"

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "./styles/all.min.css"
import 'font-awesome/css/font-awesome.min.css'
// import "./styles/animate/animate.compat.css"
import 'animate.css'
import "simple-line-icons/css/simple-line-icons.css"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "./styles/owl.theme.default.min.css"
import "./styles/magnific-popup.min.css"
import "./styles/theme.css"
import "./styles/theme-blog.css"
import "./styles/theme-shop.css"
import "./styles/theme-elements.css"
import "./styles/demo-business-consulting-2.css"
import "./styles/skin-business-consulting-2.css"
// import "./styles/custom.css"
// Import AOS library
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import ReviewCard from './components/reviewCard'
import Footer from './components/footer'
// Initialize AOS


export default function Home() {
  const [satisfiedCustomer, setSatisfiedCustomer] = useState(0)
  const [successfullCustomer, setsuccessfullCustomer] = useState(0)
  const reviews = [
    {
      "name": "Bullseye Case",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      'managerName': "John Smith",
      'position': "Manager"
    },
    {
      "name": "Wall Paint Shop Case",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      'managerName': "John Smith",
      'position': "Manager"
    },
    {
      "name": "Go Gold Golden Case",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      'managerName': "John Smith",
      'position': "Manager"
    },
    {
      "name": "Bullseye Case",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      'managerName': "John Smith",
      'position': "Manager"
    },
  ]
  useEffect(() => {
    AOS.init({
      once: true
    });
    let satisfied = 0

    var timer = setInterval(function () {


      if (satisfied >= 230) {
        clearInterval(timer);
      }

      satisfied += 10;
      setSatisfiedCustomer(satisfied)
    }, 60)

    let successfull = 0

    var timer2 = setInterval(function () {


      if (successfull >= 1900) {
        clearInterval(timer2);
      }

      successfull += 100;
      setsuccessfullCustomer(successfull)
    }, 60)

    // setTimeout(() => {
    //   satisfied += 100
    //   if (satisfied >= 250) {
    //     setSatisfiedCustomer(satisfiedCustomer)
    //   }
    // }, 40)
  }, []);

  return (
    <div className="body">
      <Navbar />
      <div role="main" className="main">
        <section className="page-header page-header-modern custom-page-header bg-color-quaternary">
          <div className="container">
            <div className="row">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h1
                  className="font-weight-bold text-9 text-color-secondary animate__animated animate__fadeInLeft animate__fast"

                >
                  Cases
                </h1>
              </div>
              <div className="col-md-4 order-1 order-md-2 align-self-center  animate__animated animate__fadeInRight animate__fast">
                <ul
                  className="breadcrumb d-block text-md-end"
                >
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">Cases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-4 pt-3 pt-lg-0">
              <div className="card border-radius-0 box-shadow-1 border-0 me-lg-3 p-3 mb-4 mb-lg-0">
                <img
                  src="img/demos/business-consulting-2/bg/bg-1.jpg"
                  className="img-fluid border-radius-0"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 pt-3 pt-lg-0">
              <p
                className="text-4 line-height-9 animate__animated animate__fadeIn animate__fast"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, sed porta est consectetur.
                Vestibulum auctor felis eget orci semr vestibulum. Pellentesque
                ultricies nibh gravida, accumsan libero luctus, molestie nunc. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p
                className="m-0 p-0 animate__animated animate__fadeIn animate__delay-1s animate__fast"


              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, sed porta est consectetur.
                Vestibulum auctor felis eget orci semr vestibulum. Pellentesque
                ultricies nibh gravida.
              </p>
              <div className="counters custom-counters mt-5 d-flex">
                <div
                  className="counter counter-primary  animate__animated animate__fadeInLeft animate__fadeInUp animate__delay-1s animate__fast"


                >
                  <strong data-to={240} data-append="+">
                    {satisfiedCustomer}+
                  </strong>
                  <label className="text-color-primary font-weight-bold">
                    Satisfied Clients
                  </label>
                </div>
                <div
                  className="counter counter-primary animate__animated animate__fadeInLeft animate__fadeInUp animate__delay-2s animate__fast"


                >
                  <strong data-to={2000} data-append="+">
                    {successfullCustomer}+
                  </strong>
                  <label className="text-color-primary font-weight-bold">
                    Successfull Cases
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="real-word-stories bg-color-quaternary overflow-hidden p-relative pt-5 pb-4">
          <div className="container">
            <div className="row justify-content-between pt-5 mb-2">
              {reviews.map((a, i) => {
                return (
                  <ReviewCard key={i} data={a} i={i} />
                )
              })}

            </div>
          </div>
        </section>
        <section className="are-you-looking-for bg-color-secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5">
                <p
                  className="text-uppercase font-weight-semibold mb-1 text-color-light "
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <span
                    className="line-pre-title bg-color-primary "
                    data-aos="fade-right"
                    data-aos-duration="1000"

                  />
                  Are you looking for a
                </p>
                <h2
                  className="text-color-light font-weight-bold text-capitalize mb-1 letter-spacing-08 font-size-32 "
                  data-aos="fade-right"
                  data-aos-duration="1000"

                >
                  Business Plan Consultant?
                </h2>
                <p
                  className="font-weight-semibold text-color-light mb-0 "
                  data-aos="fade-right"
                  data-aos-duration="1200"

                >
                  Schedule your company strategy session right now!
                </p>
              </div>
              <div className="col-xl-6 d-flex align-items-start align-items-sm-center justify-content-start justify-content-xl-end mt-4 mt-xl-0 flex-column flex-sm-row">
                <span
                  className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 "
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <span>
                    <img
                      width={18}
                      height={25}
                      src="img/demos/business-consulting-2/icons/phone.svg"
                      alt="Phone"
                    />
                  </span>
                  <a
                    className="text-color-light text-decoration-none"
                    href="tel:123-456-7890"
                  >
                    (800) 123-4567
                  </a>
                </span>
                <a
                  href="demo-business-consulting-2-contact-us.html"
                  className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold "
                  data-aos="fade-left"
                  data-aos-duration="1200"

                >
                  free initial consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>

  )
}
