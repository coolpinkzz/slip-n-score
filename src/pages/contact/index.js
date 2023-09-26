/** @jsx jsx */
import {jsx} from "theme-ui";
import * as React from "react";
import {Header} from "../../components/Header";
import {AboutUs} from "../../components/AboutUs";
import {ContactUs} from "../../components/ContactUs";
import {Footer} from "../../components/Footer";
import {SEO} from "../../utils/constant";

const ContactPage = () => {
    return (
        <>
            <Header />
            <ContactUs />
            <Footer />

        </>
    )
};


export default ContactPage
export const Head = () => (
    <>
        <title>{SEO?.CONTACT?.title}</title>
        <meta name="description" content={SEO?.CONTACT?.description} />
        <meta name="image" content='https://ik.imagekit.io/slipnscore/logo.png?updatedAt=1695708043285' />
    </>
)

