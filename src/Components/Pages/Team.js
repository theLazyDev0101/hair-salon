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

const Team = (props) => {
    return (
        <React.Fragment>
            <Header />
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

export default Team