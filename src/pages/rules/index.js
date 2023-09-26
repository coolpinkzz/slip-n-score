/** @jsx jsx */
import {jsx} from "theme-ui";
import * as React from "react";
import {Header} from "../../components/Header";
import {AboutUs} from "../../components/AboutUs";
import {Footer} from "../../components/Footer";
import {SEO} from "../../utils/constant";
import {RulesRegulation} from "../../components/RulesRegulation";

const RulesPage = () => {
    return (
        <>
            <Header />
            <RulesRegulation />
            <Footer />
        </>
    )
};


export default RulesPage
export const Head = () => (
    <>
        <title>{SEO?.RULES?.title}</title>
        <meta name="description" content={SEO?.RULES?.description} />
        <meta name="image" content='https://ik.imagekit.io/slipnscore/logo.png?updatedAt=1695708043285' />
    </>
)

