/** @jsx jsx */
import {jsx} from "theme-ui";
import * as React from "react";
import {Header} from "../../components/Header";
import {AboutUs} from "../../components/AboutUs";
import {ContactUs} from "../../components/ContactUs";
import {Footer} from "../../components/Footer";

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
export const Head = () => <title>Contact | Slip N Score</title>

