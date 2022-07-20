import React from "react";
import './encabezado.css';

function Encabezado ( { foto, usuario='' } ) {
    return (
        <div className='encabezado'>
            <div className='foto'>
               <img src= {foto}  />
            </div>

            <div className='usuario'>
                {`@${usuario}`}
            </div>
        </div>
    );
}

export default Encabezado;