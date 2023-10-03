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

const Service = (props) => {
    return (
        <React.Fragment>
            <Header />
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
            <Footer />
        </React.Fragment>
    )
}

export default Service