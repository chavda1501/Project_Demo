import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../assets/images/img-1.png';
import Comman from '../Pages/Comman';

const Home = () => {
    return (
        <>
             <Comman name="Welcome to Home page" visit="/service" btnname="Get Start" imgsrc={web}/>
        </>
    )
}
export default Home;
