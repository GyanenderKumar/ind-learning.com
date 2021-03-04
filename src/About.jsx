import React from "react";
import Common from "./Common";
import image_2 from "../src/images/image-2.jpg";


const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={image_2} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;