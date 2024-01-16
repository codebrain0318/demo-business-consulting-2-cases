

import Breadcrumb from '@/components/layout/Breadcrumb';
import CounterUp from '@/components/ui/CounterUp';

import '@/styles/demos/demo-business-consulting-2.css';
import '@/styles/skins/skin-business-consulting-2.css';
import Revel from '@/utilities/RevelAnimation';

import Image from 'next/image';
import Link from 'next/link';


const storiesData = {
  stories: [
    {
      id: "1",
      logoUrl: "/img/demos/business-consulting-2/logos/case-logo-1.png",
      title: "Bullseye Case",
      discText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      avater: "/img/avatars/avatar-3.jpg",
      reviewr: "John Smith",
      designation: "MANAGER"
    },
    {
      id: "2",
      logoUrl: "/img/demos/business-consulting-2/logos/case-logo-1.png",
      title: "Bullseye Case",
      discText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      avater: "/img/avatars/avatar-3.jpg",
      reviewr: "John Smith",
      designation: "MANAGER"
    },
    {
      id: "3",
      logoUrl: "/img/demos/business-consulting-2/logos/case-logo-1.png",
      title: "Bullseye Case",
      discText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      avater: "/img/avatars/avatar-3.jpg",
      reviewr: "John Smith",
      designation: "MANAGER"
    },
    {
      id: "4",
      logoUrl: "/img/demos/business-consulting-2/logos/case-logo-1.png",
      title: "Bullseye Case",
      discText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.",
      avater: "/img/avatars/avatar-3.jpg",
      reviewr: "John Smith",
      designation: "MANAGER"
    },
  ]
}


export default function Home() {
  return (
    <main className='main'>
      <Breadcrumb current__page='CASES' />


      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 pt-3 pt-lg-0">
            <div className="card border-radius-0 box-shadow-1 border-0 me-lg-3 p-3 mb-4 mb-lg-0">
              <Image height={855} width={950} src="/img/demos/business-consulting-2/bg/bg-1.jpg" className="img-fluid border-radius-0" alt="image" />
            </div>
          </div>
          <div className="col-lg-8 pt-3 pt-lg-0">
            <p className="text-4 line-height-9 " data-="fadeIn" data--delay={100}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semr vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="m-0 p-0 " data-="fadeIn" data--delay={300}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semr vestibulum. Pellentesque ultricies nibh gravida.</p>
            <div className="counters custom-counters mt-5 d-flex">
              <Revel>
              <div className="counter counter-primary ">
                <strong>
                  <CounterUp countTo={240} />
                </strong>
                <label className="text-color-primary font-weight-bold">Satisfied Clients</label>
              </div>
              </Revel>
              <Revel>
              <div className="counter counter-primary">
                <strong>
                  <CounterUp countTo={2000} />
                </strong>
                <label className="text-color-primary font-weight-bold">Successfull Cases</label>
              </div>
              </Revel>
            </div>
          </div>
        </div>
      </div>


      <section className="real-word-stories bg-color-quaternary overflow-hidden p-relative pt-5 pb-4">
        <div className="container">
          <div className="row justify-content-between pt-5 mb-2">
            {storiesData?.stories?.map((item) => (
              <div className="col-lg-6 position-relative" key={item.id}>
                <div className="custom-testimonial-container bg-color-light mb-5">
                  <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
                    <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
                      <Image width={130} height={92} src={item.logoUrl} alt="Bullseye" />
                      <Link href="/" className="d-block btn btn-primary custom-button-testimonial-right text-center text-uppercase text-decoration-none border-0 p-0 font-weight-semibold p-absolute">read more</Link>
                    </div>
                    <blockquote className="px-0 pb-5">
                      <h4 className="text-color-secondary font-weight-bold text-start font-poppins">{item.title}</h4>
                      <p className="mb-0 text-start text-3 font-poppins"> {item.discText}
                        <Link href="/" className="font-weight-bold text-uppercase text-decoration-none d-block d-sm-none mt-3">read more +</Link></p>
                    </blockquote>
                    <div className="testimonial-arrow-down" />
                    <div className="testimonial-author d-flex flex-row justify-content-start align-items-center">
                      <Image height={200} width={200} src={item.avater} className="img-fluid rounded-circle m-0 me-3" alt={item.reviewr} />
                      <p><strong className="font-weight-extra-bold text-start text-color-secondary mb-1">{item.reviewr}</strong><span className="text-uppercase text-start">{item.designation}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="are-you-looking-for bg-color-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5">
              <Revel>
                <>
                <p className="text-uppercase font-weight-semibold mb-1 text-color-light " data-="fadeInRightShorter" data--delay={100}><span className="line-pre-title bg-color-primary " data-="fadeInRightShorter" data--delay={200} />Are you looking for a</p>
              <h2 className="text-color-light font-weight-bold text-capitalize mb-1 letter-spacing-08 font-size-32 " data-="fadeInRightShorter" data--delay={200}>Business Plan Consultant?</h2>
              <p className="font-weight-semibold text-color-light mb-0 " data-="fadeInRightShorter" data--delay={300}>Schedule your company strategy session right now!</p>
                </>
              </Revel>
            </div>
            <div className="col-xl-6 d-flex align-items-start align-items-sm-center justify-content-start justify-content-xl-end mt-4 mt-xl-0 flex-column flex-sm-row">
            <span className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 " data-="fadeInLeftShorter" data--delay={500}>
            <span>
                  <img width={18} height={25} src="img/demos/business-consulting-2/icons/phone.svg" alt="Phone" />
                </span>
                <Revel>
                <Link className="text-color-light text-decoration-none" href="tel:123-456-7890">(800) 123-4567</Link>
                </Revel>
              </span>
              <Revel>
              <a href="demo-business-consulting-2-contact-us.html" className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold " data-="fadeInLeftShorter" data--delay={600}>free initial consultation</a>
              </Revel>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
