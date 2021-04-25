import React from 'react'


const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="card-images">
                <img src={props.imgsrc} alt="natureimg" className="card-img-top"/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid officiis, mollitia esse delectus hic facere ipsum ducimus earum ratione voluptatem animi nemo dolor accusamus pariatur tempora culpa perspiciatis dicta.
            </p>
            <a href="#" className="btn btn-outline-primary d-inline">Go AnyWhere</a>
            </div>
        </div>
    )
}

export default Card;