import React from "react";

const SecondsCounter = (props) => {
	return (
	<div className=" container fs-1 fw-bold d-flex flex-row">
        <div className="cuadradito text-white bg-dark"><i className="far fa-clock"></i></div>
        <div className="cuadradito text-white bg-dark">{props.numero1}</div>
        <div className="cuadradito text-white bg-dark">{props.numero2}</div>
        <div className="cuadradito text-white bg-dark">{props.numero3}</div>
        <div className="cuadradito text-white bg-dark">{props.numero4}</div>
        <div className="cuadradito text-white bg-dark">{props.numero4}</div>
        <div className="cuadradito text-white bg-dark">{props.numero5}</div>
        <div className="cuadradito text-white bg-dark">{props.numero6}</div>
    </div>
       
	);
};

export default SecondsCounter;