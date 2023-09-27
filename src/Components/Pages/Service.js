import React, {Fragment} from "react";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { ImageName } from '../enums'

import '../Style/css/style.css'
import '../Style/css/bootstrap.min.css'
import '../Style/lib/animate/animate.min.css'
import '../Style/lib/owlcarousel/assets/owl.carousel.min.css'

const Service = () => {
    return (
        <React.Fragment>
            <Header />
            <div>This is Service Page</div>
            <Footer />
        </React.Fragment>
    )
}

export default Service