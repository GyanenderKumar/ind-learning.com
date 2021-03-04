import React from "react";
import Common from "./Common";
import image_1 from "../src/images/image-1.jpg";


const Home = () => {
    return (
        <>
            <Common name="Perfect Learning is the beggining of the success" imgsrc={image_1} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home;