import React from 'react';
import rueda from '../../Assets/rueda.gif';
import './Loading.css';

function Loading() {


    return (
        <div className="container-father">
            <div className="container-children">
                <img src={rueda} alt=""/>
            </div>
        </div>
    )
}
export default Loading;