import React, { Component } from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h2 className="text-center text-light"> Tareas de la comisión {props.comision} </h2>
        </div>
    );
}

export default Subtitulo;