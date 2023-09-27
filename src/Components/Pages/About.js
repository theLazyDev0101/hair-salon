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

const About = () => {
    return (
        <React.Fragment>
            <Header />
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div class="d-flex flex-column">
                                <img class="img-fluid w-75 align-self-end" src={ImageName.IMAGE_NAME.aboutImg} alt="" />
                                <div class="w-50 bg-secondary p-5" style={{ marginTop: '-25%' }}>
                                    <h1 class="text-uppercase text-primary mb-3">25 Years</h1>
                                    <h2 class="text-uppercase mb-0">Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p class="d-inline-block bg-secondary text-primary py-1 px-4">About Us</p>
                            <h1 class="text-uppercase mb-4">More Than Just A Haircut. Learn More About Us!</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Since 1990</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">1000+ clients</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
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
            <Footer />
        </React.Fragment>
    )
}

export default About