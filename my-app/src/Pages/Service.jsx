import React from 'react'
import Card from './Cards'
import web from '../assets/images/img-1.png'
const Service = (prop) => {
    return (
        <>
        <div className="container">

            <h1 className="text-center">Our Service</h1>
            <div className="row gy-4">
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment1"/>
                </div>
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment2"/>
                </div>
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment3"/>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Service;