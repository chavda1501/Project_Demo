import React from 'react';

const Home = () => {
    return (
        <>
        <section id="header" className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="left-side">
                        <h1>Grow your business with <strong className="brand-name">DocthHub</strong></h1>
                        <h2 className="my-3">We are the team of talented devloper making websites</h2>
                        <div className="mt-3">
                            <a href="#" className="btn-start"> Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <div className="header-img">
                        <img src={} alt="banner-img" className="img-fluid animted"/>
                    </div> */}
                </div>
               
            </div>
        </section>
        </>
    )
}
export default Home;
