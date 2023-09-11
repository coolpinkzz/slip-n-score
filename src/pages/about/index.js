/** @jsx jsx */
import {jsx} from "theme-ui";
import * as React from "react";
import {Header} from "../../components/Header";
import {AboutUs} from "../../components/AboutUs";
import {Footer} from "../../components/Footer";

const AboutPage = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Footer />
        </>
    )
};


export default AboutPage
export const Head = () => <title>About | Slip N Score</title>

