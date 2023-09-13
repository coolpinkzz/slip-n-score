/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../../utils/constant";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";

const ServicePage = ({ params }) => {
  return (
    <>
      {Services?.filter((service) => service.slug === params.slug)?.map(
        (item) => {
          console.log(item?.url);
          console.log(`../../images/hero_bg.png`);
          return (
            <>
              <img
                //className="service-img"
                src={`../../../static/${item?.url}`}
                alt="slip n score"
              />
            </>
          );
        }
      )}
    </>
  );
};

export default ServicePage;
export const Head = () => <title>Activities | Slip N Score</title>;
