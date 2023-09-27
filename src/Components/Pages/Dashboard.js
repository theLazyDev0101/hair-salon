import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { ImageName } from '../enums'

import '../Style/css/style.css'
import '../Style/css/bootstrap.min.css'
import '../Style/lib/animate/animate.min.css'
import '../Style/lib/owlcarousel/assets/owl.carousel.min.css'


const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={ImageName.IMAGE_NAME.carouselOne} alt="Image" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                                <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">We Will Keep You An Awesome Look</h1>
                                    <h4 className="text-white text-uppercase mb-4 animated slideInDown"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3" size="sm"></FontAwesomeIcon>123 Street, New York, USA</h4>
                                    <h4 className="text-white text-uppercase mb-4 animated slideInDown"><FontAwesomeIcon icon={faPhoneAlt} className="fa fa-phone-alt text-primary me-3"></FontAwesomeIcon>+012 345 67890</h4>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={ImageName.IMAGE_NAME.carouselTwo} alt="Image" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                                <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">Luxury Haircut at Affordable Price</h1>
                                    <h4 className="text-white text-uppercase mb-4 animated slideInDown"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3" size="sm"></FontAwesomeIcon>123 Street, New York, USA</h4>
                                    <h4 className="text-white text-uppercase mb-4 animated slideInDown"><FontAwesomeIcon icon={faPhoneAlt} className="fa fa-phone-alt text-primary me-3"></FontAwesomeIcon>+012 345 67890</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                <img className="img-fluid w-75 align-self-end" src={ImageName.IMAGE_NAME.aboutImg} alt="" />
                                <div className="w-50 bg-secondary p-5" style={{marginTop: '-25%' }}>
                                    <h1 className="text-uppercase text-primary mb-3">25 Years</h1>
                                    <h2 className="text-uppercase mb-0">Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="d-inline-block bg-secondary text-primary py-1 px-4">About Us</p>
                            <h1 className="text-uppercase mb-4">More Than Just A Haircut. Learn More About Us!</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-3">Since 1990</h3>
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="text-uppercase mb-3">1000+ clients</h3>
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block bg-secondary text-primary py-1 px-4">Services</p>
                        <h1 className="text-uppercase">What We Provide</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.hairCut} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Haircut</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.beardTrimImg} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Beard Trim</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.mansShave} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Mans Shave</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.hairDying} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Hair Dyeing</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.moustache} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Mustache</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px',  height: '60px' }}>
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.stacking} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3 className="text-uppercase mb-3">Stacking</h3>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                                    <span className="text-uppercase text-primary">From $15</span>
                                </div>
                                <a className="btn btn-square" href=""><FontAwesomeIcon icon={faPlus} className="fa fa-plus text-primary"></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                                <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Price & Plan</p>
                                <h1 className="text-uppercase mb-4">Check Out Our Barber Services And Prices</h1>
                                <div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Haircut</h6>
                                        <span className="text-uppercase text-primary">$29.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Beard Trim</h6>
                                        <span className="text-uppercase text-primary">$35.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Mans Shave</h6>
                                        <span className="text-uppercase text-primary">$23.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Hair Dyeing</h6>
                                        <span className="text-uppercase text-primary">$19.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Mustache</h6>
                                        <span className="text-uppercase text-primary">$15.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <h6 className="text-uppercase mb-0">Stacking</h6>
                                        <span className="text-uppercase text-primary">$39.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100">
                                <img className="img-fluid h-100" src={ImageName.IMAGE_NAME.price} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block bg-secondary text-primary py-1 px-4">Our Barber</p>
                        <h1 className="text-uppercase">Meet Our Barber</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.teamOne} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebookF} className="fa fa-facebook-f"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Barber Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.teamTwo} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebookF} className="fa fa-facebook-f"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Barber Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.teamThree} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebookF} className="fa fa-facebook-f"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Barber Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid" src={ImageName.IMAGE_NAME.teamFour} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebookF} className="fa fa-facebook-f"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"></FontAwesomeIcon></a>
                                        <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h5 className="text-uppercase">Barber Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100">
                                <img className="img-fluid h-100" src={ImageName.IMAGE_NAME.open} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                                <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Working Hours</p>
                                <h1 className="text-uppercase mb-4">Professional Barbers Are Waiting For You</h1>
                                <div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Monday</h6>
                                        <span className="text-uppercase">09 AM - 09 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Tuesday</h6>
                                        <span className="text-uppercase">09 AM - 09 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Wednesday</h6>
                                        <span className="text-uppercase">09 AM - 09 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Thursday</h6>
                                        <span className="text-uppercase">09 AM - 09 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <h6 className="text-uppercase mb-0">Friday</h6>
                                        <span className="text-uppercase">09 AM - 09 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <h6 className="text-uppercase mb-0">Sat / Sun</h6>
                                        <span className="text-uppercase text-primary">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block bg-secondary text-primary py-1 px-4">Testimonial</p>
                        <h1 className="text-uppercase">What Our Clients Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-1.jpg' alt=''>">
                            <h4 className="text-uppercase">Client Name</h4>
                            <p className="text-primary">Profession</p>
                            <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-2.jpg' alt=''>">
                            <h4 className="text-uppercase">Client Name</h4>
                            <p className="text-primary">Profession</p>
                            <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-3.jpg' alt=''>">
                            <h4 className="text-uppercase">Client Name</h4>
                            <p className="text-primary">Profession</p>
                            <span className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
                        </div>
                    </div>      
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Dashboard