/** @jsx jsx */
import {jsx} from "theme-ui";
import * as React from "react";
import {Header} from "../../components/Header";
import {AboutUs} from "../../components/AboutUs";
import {Footer} from "../../components/Footer";
import {SEO} from "../../utils/constant";

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
export const Head = () => (
    <>
        <title>{SEO?.ABOUT?.title}</title>
        <meta name="description" content={SEO?.ABOUT?.description} />
        <meta name="image" content='https://ik.imagekit.io/slipnscore/logo.png?updatedAt=1695708043285' />
    </>
)

