import React from 'react'
import Card from './Cards'
import web from '../src/images/img-1.png'

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
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment4"/>
                </div>
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment5"/>
                </div>
                <div className="col-md-4">
                    <Card  imgsrc={web} title="Web Devlopment6"/>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Service;