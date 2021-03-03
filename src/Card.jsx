import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgscr} alt="Card Image" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolore cupiditate beatae quos. Distinctio totam quibusdam, quasi corporis odio sint repellat consectetur porro ut, earum officia dolorem architecto tempora fugiat.
                        </p>
                        <NavLink to="" className="btn btn-outline-primary">Go Tutorial</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;