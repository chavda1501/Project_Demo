import React from 'react';
import web from '../assets/images/img-1.png';
import Comman from '../Pages/Comman';

const About = () => {
    return (
        <>
            <Comman name="Welcome to about page" visit="/service" btnname="contact here" imgsrc={web}/>
        </>
    )
}
export default About;
