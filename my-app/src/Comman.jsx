import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img-1.png';

const Comman = (props) => {
    return (
        <>
        <section id="header" className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="left-side">
                        <h1>
                            {props.name} <br/>
                            <strong className="brand-name">DocthHub</strong>
                            </h1>
                        <h2 className="my-3">We are the team of talented devloper making websites</h2>
                        <div className="mt-5">
                            <NavLink to={props.visit} className="btn-start">{props.btnname}</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-img">
                        <img src={props.imgsrc} alt="banner-img" className="img-fluid animted"/>
                    </div>
                </div>
               
            </div>
        </section>
        </>
    )
}
export default Comman;
