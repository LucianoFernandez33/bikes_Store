import React from 'react';
import error404 from '../../Assets/error404.png';
import './PageError.css';

function PageError() {


    return (
        <div className="container-father">
            <div className="container-children-error404">
                <img src={error404} alt="imagen error 404"/>
            </div>
        </div>
    )
}
export default PageError;